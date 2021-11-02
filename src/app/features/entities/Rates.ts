import Valute from "./Valute";

export default interface IRates {
  readonly Date: Date;
  readonly PreviousDate: Date;
  readonly Valute: Valute[];
}

export interface GetRates {
  readonly Date: string;
  readonly PreviousDate: string;
  readonly Valute: any;
}