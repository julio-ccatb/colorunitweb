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
  let pesoBasesBlancas = new Decimal(0);
  let pesoBasesNoBlancas = new Decimal(0);
  let pesoColorantes = new Decimal(0);

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

  const porcentaje = pesoBasesBlancas.div(totalPeso).mul(100);

  const tipoBase = await db.tbase.findFirst({ where: { id: tipo } });

  let selectedPeso;

  if (porcentaje.greaterThanOrEqualTo(95)) {
    selectedPeso = tipoBase?.peso1;
  } else if (porcentaje.greaterThanOrEqualTo(85)) {
    selectedPeso = tipoBase?.peso2;
  } else if (porcentaje.greaterThanOrEqualTo(75)) {
    selectedPeso = tipoBase?.peso3;
  } else if (porcentaje.greaterThanOrEqualTo(65)) {
    selectedPeso = tipoBase?.peso4;
  } else {
    selectedPeso = tipoBase?.peso5;
  }

  const coeficienteG = selectedPeso?.div(totalPeso) ?? 1;

  const updateBaseNoBlanca = recordsBasesBlancas.map((record) => {
    return db.regcolbases.update({
      where: { id: record.id },
      data: { amount: record.amount.mul(coeficienteG).div(5) },
    });
  });

  const updateBaseBlanca = recordsBasesNoBlancas.map((record) => {
    return db.regcolbases.update({
      where: { id: record.id },
      data: { amount: record.amount.mul(coeficienteG).div(5) },
    });
  });
  const updateColorant = record.regcolcolorants.map((record) => {
    return db.regcolcolorants.update({
      where: { id: record.id },
      data: { amount: record.amount.mul(coeficienteG).div(5) },
    });
  });

  await db.$transaction(updateBaseBlanca);
  await db.$transaction(updateBaseNoBlanca);
  await db.$transaction(updateColorant);

  const updateRegCol = await db.regcol.update({
    where: { id },
    data: {
      tbaseId: tipo,
      pesopromedio: selectedPeso,
      active: true,
      coeficienteG:
        coeficienteG !== new Decimal(1) ? record.coeficienteG : coeficienteG,
    },
    include: { regcolbases: true, regcolcolorants: true, Tbase: true },
  });

  console.log(updateRegCol);
  return updateRegCol;
};
