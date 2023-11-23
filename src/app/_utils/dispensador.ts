import Decimal from "decimal.js";

export const calcularUnidades = (
  cantidadGramos: Decimal,
  pesoUnidadGrande: Decimal,
  pesoUnidadPequeña: Decimal,
) => {
  // Calcular la cantidad de unidades grandes
  const unidadesGrandes = cantidadGramos.dividedBy(pesoUnidadGrande).floor();

  // Calcular la cantidad de unidades pequeñas
  const unidadesPequeñas = cantidadGramos
    .minus(new Decimal(unidadesGrandes).times(pesoUnidadGrande))
    .dividedBy(pesoUnidadPequeña)
    .floor();

  const margen = unidadesGrandes
    .mul(pesoUnidadGrande)
    .plus(unidadesPequeñas.mul(pesoUnidadPequeña))
    .minus(cantidadGramos);

  return { unidadesGrandes, unidadesPequeñas, margen };
};
