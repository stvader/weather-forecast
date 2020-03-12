import { createAsyncAction } from 'typesafe-actions';
import { getCityWeatherForecast } from '../services/weatherApiService';
import { ICoords } from './transformers/transformerWeatherCurrentPlace';
import transformDataCityForecast from './transformers/transformDataCityForecast';

import {
  FETCH_CITY_WEATHER_FORECAST_REQUEST,
  FETCH_CITY_WEATHER_FORECAST_SUCCESS,
  FETCH_CITY_WEATHER_FORECAST_ERROR,
} from '../constants/actionsConstants';
import { TGraphType } from '../utils/getGraphCardHeaderAdditinalTitle';

const fetchCityWeatherForecastAsync = createAsyncAction(
  FETCH_CITY_WEATHER_FORECAST_REQUEST,
  FETCH_CITY_WEATHER_FORECAST_SUCCESS,
  FETCH_CITY_WEATHER_FORECAST_ERROR,
)<string, any, Error>();

export const fetchCityWeatherForecast = (
  coord: ICoords,
  cityBlockId: any,
  graphType: TGraphType,
) => async (dispatch: any) => {
  dispatch(fetchCityWeatherForecastAsync.request(cityBlockId));

  try {
    const dataApi = await getCityWeatherForecast(coord);
    const data = transformDataCityForecast(dataApi);

    dispatch(fetchCityWeatherForecastAsync.success({ ...data, cityBlockId, graphType }));
  } catch (error) {
    dispatch(fetchCityWeatherForecastAsync.failure({ ...error, cityBlockId }));
  }
};
