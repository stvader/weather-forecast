import uuid from 'uuid/v4';

import {
  getUrlThroughCoords,
  getUrlThroughCityName,
  getUrlThroughCityId,
  getUrlMap,
  getUrlCityForecast,
} from '../utils/requestsUrls';
import { ICoords } from '../thunks/transformers/transformerWeatherCurrentPlace';

export const getWeatherDataFromApi = async (url: string) => {
  const res = await fetch(url);
  const json = await res.json();

  return json;
};

export const getWeatherDataFromApiThroughCoords = (reqData: ICoords) => {
  const url = getUrlThroughCoords(reqData);

  return getWeatherDataFromApi(url);
};

export const getWeatherDataFromApiThroughName = (reqData: string) => {
  const url = getUrlThroughCityName(reqData);

  return getWeatherDataFromApi(url);
};

export const getWeatherDataFromApiThroughId = (reqData: number) => {
  const url = getUrlThroughCityId(reqData);

  return getWeatherDataFromApi(url);
};

export const getWeatherMap = async ({ lon, lat }: ICoords) => {
  const url = getUrlMap(lon, lat);
  const res = await fetch(url);
  const blob = await res.blob();
  const img = URL.createObjectURL(blob);
  const id = uuid();

  return { img, id, coord: { lon, lat } };
};

export const getCityWeatherForecast = (reqData: ICoords) => {
  const url = getUrlCityForecast(reqData);

  return getWeatherDataFromApi(url);
};
