import Valute from './Valute';

export default interface IConvertData {
  readonly from: Valute;
  readonly to: Valute;
  readonly value: number;
  readonly result: number;
}
