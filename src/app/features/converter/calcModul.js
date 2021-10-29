export const convert = (from, to, value) => {
  return +((value * from.Value / from.Nominal) / (to.Value / to.Nominal)).toFixed(4);
}