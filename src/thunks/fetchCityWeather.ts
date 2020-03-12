import { createAsyncAction } from 'typesafe-actions';
import transformDataWeatherCity from './transformers/transformerWeatherCity';

import {
  FETCH_CITY_WEATHER_REQUEST,
  FETCH_CITY_WEATHER_SUCCESS,
  FETCH_CITY_WEATHER_ERROR,
} from '../constants/actionsConstants';

export const fetchCityWeatherAsync = createAsyncAction(
  FETCH_CITY_WEATHER_REQUEST,
  FETCH_CITY_WEATHER_SUCCESS,
  FETCH_CITY_WEATHER_ERROR,
)<string, any, Error>();

export const fetchCityWeather = (
  reqData: any,
  selected: boolean,
  getFunction: (reqData: any) => any,
) => async (dispatch: any) => {
  // @ts-ignore
  dispatch(fetchCityWeatherAsync.request());

  try {
    const dataApi = await getFunction(reqData);
    const data = transformDataWeatherCity(dataApi, selected);

    dispatch(fetchCityWeatherAsync.success(data));
  } catch (error) {
    dispatch(fetchCityWeatherAsync.failure(error));
  }
};
