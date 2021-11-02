export default interface IValute {
  readonly ID: string;
  readonly NumCode: number;
  readonly CharCode: string;
  readonly Nominal: number;
  readonly Name: string;
  readonly Value: number;
  readonly Previous: number;
}

export const RUB: IValute = {
  ID: '',
  NumCode: 810,
  CharCode: 'RUB',
  Nominal: 1,
  Name: 'Российский рубль',
  Value: 1,
  Previous: 1,
}