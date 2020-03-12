import {
  CELSIUS,
  TempUnit,
  CELSIUS_SIGN,
  FAHRENHEIT_SIGN,
} from '../constants/temperatureUnitConstants';
import {
  conversionCelciumToFahrenheit,
  conversionKelvinToCelcium,
  conversionKelvinToFahrenheit,
} from '../utils/temperatureConversion';

const HIGH_TEMP_LIMIT_CELSIUM = 30;
const LOW_TEMP_LIMIT_CELSIUM = -65;
const HIGH_TEMP_LIMIT_FAHRENHEIT = conversionCelciumToFahrenheit(HIGH_TEMP_LIMIT_CELSIUM);
const LOW_TEMP_LIMIT_FAHRENHEIT = conversionCelciumToFahrenheit(LOW_TEMP_LIMIT_CELSIUM);

interface IParamTempSwitch {
  legendSign: string;
  highTempLimit: number;
  lowTempLimit: number;
  conversionFunction: (temp: number) => number;
}

export const useParamTempSwitch = (tempSwitcher: TempUnit): IParamTempSwitch => {
  if (tempSwitcher === CELSIUS) {
    return {
      legendSign: CELSIUS_SIGN,
      highTempLimit: HIGH_TEMP_LIMIT_CELSIUM,
      lowTempLimit: LOW_TEMP_LIMIT_CELSIUM,
      conversionFunction: conversionKelvinToCelcium,
    };
  }

  return {
    legendSign: FAHRENHEIT_SIGN,
    highTempLimit: HIGH_TEMP_LIMIT_FAHRENHEIT,
    lowTempLimit: LOW_TEMP_LIMIT_FAHRENHEIT,
    conversionFunction: conversionKelvinToFahrenheit,
  };
};
