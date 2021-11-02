import IValute from "../entities/Valute";

/**
 * Конвертация валют
 * 
 * @param from Базовая валюта
 * @param to Котируемая валюта
 * @param value Количество базовой валюты
 * @returns Конверитированное количество котируемой валюты
 */
export function convert (from:IValute, to:IValute, value:number) : number {
  return +((value * from.Value / from.Nominal) / (to.Value / to.Nominal)).toFixed(4) ?? 0;
}