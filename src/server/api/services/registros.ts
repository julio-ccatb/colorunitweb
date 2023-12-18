import Decimal from "decimal.js";
import { db } from "~/server/db";

export function calcularDistanciaRGB(
  color1: { R: number; G: number; B: number },
  color2: { R: number; G: number; B: number },
): number {
  const distancia = Math.sqrt(
    Math.pow(color2.R - color1.R, 2) +
      Math.pow(color2.G - color1.G, 2) +
      Math.pow(color2.B - color1.B, 2),
  );

  return distancia;
}

export const processRegCol = async (id: number) => {
  const [record, recordsBasesBlancas, recordsBasesNoBlancas] =
    await Promise.all([
      db.regcol.findFirst({
        where: { id: id },
        include: { regcolcolorants: true },
      }),
      db.regcolbases.findMany({
        where: { regColId: id, base: { slang: "BLANCO" } },
        orderBy: { amount: "desc" },
        include: { base: true },
      }),
      db.regcolbases.findMany({
        where: { regColId: id, NOT: { base: { slang: "BLANCO" } } },
        orderBy: { amount: "desc" },
        include: { base: true },
      }),
    ]);

  if (!record || !recordsBasesBlancas || !recordsBasesNoBlancas) return;
  if (record.process) return;

  let totalPeso = new Decimal(0);
  let totalBasesProcess = new Decimal(0);
  let pesoBasesBlancas = new Decimal(0);
  let pesoBasesNoBlancas = new Decimal(0);
  let pesoColorantes = new Decimal(0);
  let procentajeBases = new Decimal(0);
  let procentajeColorantes = new Decimal(0);
  let PesoEstimado = new Decimal(0);

  recordsBasesBlancas.map((record) => {
    pesoBasesBlancas = Decimal.sum(record.amount, pesoBasesBlancas);
    totalPeso = Decimal.sum(record.amount, totalPeso);
  });

  recordsBasesNoBlancas.map((record) => {
    pesoBasesNoBlancas = Decimal.sum(record.amount, pesoBasesNoBlancas);
    totalPeso = Decimal.sum(record.amount, totalPeso);
  });

  record?.regcolcolorants.map((record) => {
    pesoColorantes = Decimal.sum(record.amount.mul(0.0022), pesoColorantes);
    totalPeso = Decimal.sum(record.amount.mul(0.0022), totalPeso);
  });

  let tipo = 0;
  if (pesoBasesBlancas.greaterThanOrEqualTo(pesoBasesNoBlancas))
    tipo = recordsBasesBlancas[0]?.base.tbaseId ?? 0;
  if (tipo == 0) tipo = recordsBasesNoBlancas[0]?.base.tbaseId ?? 0;

  const updateBaseNoBlanca = recordsBasesBlancas.map((record) => {
    const peso = record.base.peso;
    const porcent = record.amount.div(totalPeso);

    procentajeBases = procentajeBases.plus(porcent);
    const value = record.amount.div(totalPeso).mul(peso);
    totalBasesProcess = totalBasesProcess.plus(value);

    return db.regcolbases.update({
      where: { id: record.id },
      data: { amount: value },
    });
  });

  const updateBaseBlanca = recordsBasesNoBlancas.map((record) => {
    const peso = record.base.peso;
    const porcent = record.amount.div(totalPeso);

    procentajeBases = procentajeBases.plus(porcent);
    const value = record.amount.div(totalPeso).mul(peso);

    totalBasesProcess = totalBasesProcess.plus(value);
    return db.regcolbases.update({
      where: { id: record.id },
      data: { amount: value },
    });
  });

  PesoEstimado = totalBasesProcess.div(procentajeBases);

  const updateColorant = record.regcolcolorants.map((record) => {
    const porcent = record.amount.mul(0.0022).div(totalPeso);
    const value = PesoEstimado.mul(porcent).div(0.0022);

    procentajeColorantes = procentajeColorantes.plus(porcent);

    return db.regcolcolorants.update({
      where: { id: record.id },
      data: { amount: value },
    });
  });

  // console.log(
  //   // updateBaseBlanca, updateBaseNoBlanca, updateColorant,
  //   [
  //     { totalBasesProcess },
  //     { procentajeBases },
  //     { procentajeColorantes },
  //     { PesoEstimado },
  //     { total: procentajeBases.plus(procentajeColorantes) },
  //   ],
  // );

  await db.$transaction(updateBaseBlanca);
  await db.$transaction(updateBaseNoBlanca);
  await db.$transaction(updateColorant);

  const updateRegCol = await db.regcol.update({
    where: { id },
    data: {
      tbaseId: tipo,
      pesopromedio: PesoEstimado,
      active: true,
      process: true,
    },
    include: { regcolbases: true, regcolcolorants: true, tbase: true },
  });

  return updateRegCol;
};
