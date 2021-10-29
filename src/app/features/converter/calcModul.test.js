// const convert = require('./Converter');
import {convert} from './calcModul';
// TODO: не работает импорт

const valute = [
  {
    ID: 'R01135',
    NumCode: '348',
    CharCode: 'HUF',
    Nominal: 100,
    Name: 'Венгерских форинтов',
    Value: 22.0574,
    Previous: 22.4412,
  },
  {
    ID: 'R01235',
    NumCode: '840',
    CharCode: 'USD',
    Nominal: 1,
    Name: 'Доллар США',
    Value: 69.5526,
    Previous: 70.1345,
  },
  {
    ID: 'R01239',
    NumCode: '978',
    CharCode: 'EUR',
    Nominal: 1,
    Name: 'Евро',
    Value: 80.7019,
    Previous: 81.7418,
  },
  {
    ID: '',
    NumCode: '810',
    CharCode: 'RUB',
    Nominal: 1,
    Name: 'Российский рубль',
    Value: 1,
    Previous: 1,
  },
];

describe('Converter: ', () => {
  test.each([
    [valute[2], valute[1], 1, 1.1603],
    [valute[1], valute[3], 1, 69.5526],
    [valute[3], valute[1], 100, 1.4378],
    [valute[0], valute[3], 100, 22.0574],
    [valute[0], valute[2], 200, 0.5466],
    [valute[2], valute[0], 1, 365.8722],
  ])('convert(from: %s, to %s, value: %f)', (from, to, value, expected) => {
    const result = convert(from, to, value);
    expect(result).toBeCloseTo(expected, 0.0002);
  });
});
