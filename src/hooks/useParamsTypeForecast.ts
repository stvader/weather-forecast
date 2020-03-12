import { TEMP, HUMIDITY, TGraphType } from '../utils/getGraphCardHeaderAdditinalTitle';
import {
  TempUnit,
  CELSIUS,
  CELSIUS_SIGN,
  FAHRENHEIT_SIGN,
} from '../constants/temperatureUnitConstants';
import {
  conversionCelciumToFahrenheit,
  conversionKelvinToCelcium,
  conversionKelvinToFahrenheit,
} from '../utils/temperatureConversion';

const HIGH_TEMP_LIMIT = 50;
const LOW_TEMP_LIMIT = -50;
const HIGH_TEMP_LIMIT_FAHRENHEIT = conversionCelciumToFahrenheit(HIGH_TEMP_LIMIT);
const LOW_TEMP_LIMIT_FAHRENHEIT = conversionCelciumToFahrenheit(LOW_TEMP_LIMIT);
const HIGH_HUMIDITY_LIMIT = 100;
const LOW_HUMIDITY_LIMIT = 0;

interface IParamForecast {
  paramDispayed: TGraphType;
  legendSign: string;
  highLimit: number;
  lowLimit: number;
  conversionFunction: (temp: number) => number;
}

export const useParamsTypeForecast = (
  forecastType: string,
  temperatureSwitcher: TempUnit,
): IParamForecast => {
  if (forecastType === TEMP) {
    if (temperatureSwitcher === CELSIUS) {
      return {
        paramDispayed: forecastType,
        legendSign: CELSIUS_SIGN,
        highLimit: HIGH_TEMP_LIMIT,
        lowLimit: LOW_TEMP_LIMIT,
        conversionFunction: conversionKelvinToCelcium,
      };
    }

    return {
      paramDispayed: forecastType,
      legendSign: FAHRENHEIT_SIGN,
      highLimit: HIGH_TEMP_LIMIT_FAHRENHEIT,
      lowLimit: LOW_TEMP_LIMIT_FAHRENHEIT,
      conversionFunction: conversionKelvinToFahrenheit,
    };
  }

  return {
    paramDispayed: HUMIDITY,
    legendSign: '%',
    highLimit: HIGH_HUMIDITY_LIMIT,
    lowLimit: LOW_HUMIDITY_LIMIT,
    conversionFunction: (temp: number) => temp,
  };
};
