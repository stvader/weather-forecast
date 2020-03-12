import { CELSIUS, FAHRENHEIT, TempUnit } from '../constants/temperatureUnitConstants';

export const switchTemperatureUnitFunc = (state: TempUnit) => {
  if (state === CELSIUS) {
    return FAHRENHEIT;
  }

  return CELSIUS;
};
