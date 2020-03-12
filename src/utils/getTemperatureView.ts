import { conversionKelvinToCelcium, conversionKelvinToFahrenheit } from './temperatureConversion';

import {
  CELSIUS,
  TempUnit,
  CELSIUS_SIGN,
  FAHRENHEIT_SIGN,
} from '../constants/temperatureUnitConstants';

export interface ITemperatureView {
  temperature: number;
  temperatureSwitcher: TempUnit;
}

export const getTemperatureView = ({ temperature, temperatureSwitcher }: ITemperatureView) => {
  if (temperatureSwitcher === CELSIUS) {
    return `${Math.round(conversionKelvinToCelcium(temperature))} ${CELSIUS_SIGN}`;
  }

  return `${Math.round(conversionKelvinToFahrenheit(temperature))} ${FAHRENHEIT_SIGN}`;
};
