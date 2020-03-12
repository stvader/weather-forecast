import { createAsyncAction } from 'typesafe-actions';
import { getPosition } from '../utils/currentCoords';
import { fetchWeatherCurrentPlace } from './fetchWeatherCurrentPlace';

import {
  GET_CURRENT_COORDS_REQUEST,
  GET_CURRENT_COORDS_SUCCESS,
  GET_CURRENT_COORDS_ERROR,
} from '../constants/actionsConstants';

export const getCoordsCurrentPlaceAsync = createAsyncAction(
  GET_CURRENT_COORDS_REQUEST,
  GET_CURRENT_COORDS_SUCCESS,
  GET_CURRENT_COORDS_ERROR,
)<string, any, Error>();

export const getCoordsCurrentPlace = () => async (dispatch: any) => {
  // @ts-ignore
  dispatch(getCoordsCurrentPlaceAsync.request());

  try {
    const position: any = await getPosition();
    const coords = {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    };

    dispatch(getCoordsCurrentPlaceAsync.success(coords));
    dispatch(fetchWeatherCurrentPlace(coords));
  } catch (error) {
    dispatch(getCoordsCurrentPlaceAsync.failure(error));
  }
};
