import { fetchCityWeather } from '../thunks';
import {
  getWeatherDataFromApiThroughId,
  getWeatherDataFromApiThroughName,
  getWeatherDataFromApiThroughCoords,
} from '../services/weatherApiService';

import { ICoords } from '../thunks/transformers/transformerWeatherCurrentPlace';

export const fetchCityWeatherThroughId = (cityId: number, selected: boolean) =>
  fetchCityWeather(cityId, selected, getWeatherDataFromApiThroughId);

export const fetchCityWeatherThroughCityName = (cityName: string, selected: boolean) =>
  fetchCityWeather(cityName, selected, getWeatherDataFromApiThroughName);

export const fetchCityWeatherThroughCoords = (coords: ICoords, selected: boolean) =>
  fetchCityWeather(coords, selected, getWeatherDataFromApiThroughCoords);
