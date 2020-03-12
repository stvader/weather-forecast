import { createAsyncAction } from 'typesafe-actions';
import { getCityWeatherForecast } from '../services/weatherApiService';
import { ICoords } from './transformers/transformerWeatherCurrentPlace';
import transformDataCityForecast from './transformers/transformDataCityForecast';

import {
  FETCH_WEATHER_FORECAST_COMPARE_REQUEST,
  FETCH_WEATHER_FORECAST_COMPARE_SUCCESS,
  FETCH_WEATHER_FORECAST_COMPARE_ERROR,
} from '../constants/actionsConstants';

const fetchForecastForCompareAsync = createAsyncAction(
  FETCH_WEATHER_FORECAST_COMPARE_REQUEST,
  FETCH_WEATHER_FORECAST_COMPARE_SUCCESS,
  FETCH_WEATHER_FORECAST_COMPARE_ERROR,
)<string, any, Error>();

export const fetchForecastForCompare = (coord: ICoords, cityBlockId: any) => async (
  dispatch: any,
) => {
  dispatch(fetchForecastForCompareAsync.request(cityBlockId));

  try {
    const dataApi = await getCityWeatherForecast(coord);
    const data = transformDataCityForecast(dataApi);

    dispatch(fetchForecastForCompareAsync.success({ ...data, cityBlockId }));
  } catch (error) {
    dispatch(fetchForecastForCompareAsync.failure({ ...error, cityBlockId }));
  }
};
