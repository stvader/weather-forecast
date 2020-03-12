import { createAsyncAction } from 'typesafe-actions';
import { getWeatherDataFromApiThroughCoords } from '../services/weatherApiService';
import transformDataWeatherCurrentPlace from './transformers';
import { ICoords } from './transformers/transformerWeatherCurrentPlace';

import {
  FETCH_CURRENT_WEATHER_REQUEST,
  FETCH_CURRENT_WEATHER_SUCCESS,
  FETCH_CURRENT_WEATHER_ERROR,
} from '../constants/actionsConstants';

const fetchWeatherCurrentPlaceAsync = createAsyncAction(
  FETCH_CURRENT_WEATHER_REQUEST,
  FETCH_CURRENT_WEATHER_SUCCESS,
  FETCH_CURRENT_WEATHER_ERROR,
)<string, any, Error>();

export const fetchWeatherCurrentPlace = ({ lat, lon }: ICoords) => async (dispatch: any) => {
  // @ts-ignore
  dispatch(fetchWeatherCurrentPlaceAsync.request());

  try {
    const dataApi = await getWeatherDataFromApiThroughCoords({ lat, lon });
    const data = transformDataWeatherCurrentPlace(dataApi);

    dispatch(fetchWeatherCurrentPlaceAsync.success(data));
  } catch (error) {
    dispatch(fetchWeatherCurrentPlaceAsync.failure(error));
  }
};
