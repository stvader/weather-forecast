import { action } from 'typesafe-actions';

import {
  SWITCH_TEMPERATURE_UNIT,
  DELETE_CITY_WEATHER_CARD,
  CHANGE_SEQUENCE_WEATHER_LIST,
  ADD_GRAPH_FORECAST_TEMP_MEMO,
} from '../constants/actionsConstants';
import { IForecastCity } from '../utils/getForecastForCity';
import { TGraphType } from '../utils/getGraphCardHeaderAdditinalTitle';

export const switchTemperatureUnit = () => action(SWITCH_TEMPERATURE_UNIT);

export const deleteCityWeatherCard = (id: number) => action(DELETE_CITY_WEATHER_CARD, id);

export const changeSequenceCitiesWeather = (newSequence: any[]) =>
  action(CHANGE_SEQUENCE_WEATHER_LIST, newSequence);

export const addGraphForecastTempMemorize = (forecast: IForecastCity, graphType: TGraphType) =>
  action(ADD_GRAPH_FORECAST_TEMP_MEMO, { ...forecast, graphType });
