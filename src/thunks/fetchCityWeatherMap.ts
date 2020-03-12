import { createAsyncAction } from 'typesafe-actions';
import { getWeatherMap } from '../services/weatherApiService';

import {
  FETCH_CITY_WEATHER_MAP_REQUEST,
  FETCH_CITY_WEATHER_MAP_SUCCESS,
  FETCH_CITY_WEATHER_MAP_ERROR,
} from '../constants/actionsConstants';
import { ICoords } from './transformers/transformerWeatherCurrentPlace';

const fetchCityWeatherMapAsync = createAsyncAction(
  FETCH_CITY_WEATHER_MAP_REQUEST,
  FETCH_CITY_WEATHER_MAP_SUCCESS,
  FETCH_CITY_WEATHER_MAP_ERROR,
)<string, any, Error>();

export const fetchCityWeatherMap = (coord: ICoords, cityBlockId: any) => async (dispatch: any) => {
  dispatch(fetchCityWeatherMapAsync.request(cityBlockId));

  try {
    const data = await getWeatherMap(coord);
    dispatch(fetchCityWeatherMapAsync.success({ ...data, cityBlockId }));
  } catch (error) {
    dispatch(fetchCityWeatherMapAsync.failure({ ...error, cityBlockId }));
  }
};
