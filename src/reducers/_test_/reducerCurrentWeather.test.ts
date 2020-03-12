import { reducerApp } from '../index';
import * as actions from '../../constants/actionsConstants';
import { mockCurrentPlaceWeather } from '../../mocks/mockWeatherCurrentPlace';
import { initState } from '../initState';

const actionRequestCurrentWeather = {
  type: actions.FETCH_CURRENT_WEATHER_REQUEST,
};

describe('Reducers: get current place weather', () => {
  it('should request current weather', () => {
    const store = reducerApp(initState, { type: '' });

    expect(store.weatherCurrentCity).toEqual({
      loading: false,
      error: false,
    });
  });

  it('should request current weather with success', () => {
    const actionSuccessCurrentWeather = {
      type: actions.FETCH_CURRENT_WEATHER_SUCCESS,
      payload: mockCurrentPlaceWeather,
    };

    let store = reducerApp(initState, actionRequestCurrentWeather);

    expect(store.weatherCurrentCity).toEqual({
      loading: true,
      error: false,
    });

    store = reducerApp(store, actionSuccessCurrentWeather);

    expect(store.weatherCurrentCity).toEqual({
      loading: false,
      error: false,
      data: mockCurrentPlaceWeather,
    });
  });

  it('should request current weather with error', () => {
    const error = new Error('some error');
    const actionErrorCurrentWeather = {
      type: actions.FETCH_CURRENT_WEATHER_ERROR,
      payload: error,
    };

    let store = reducerApp(initState, actionRequestCurrentWeather);

    expect(store.weatherCurrentCity).toEqual({
      loading: true,
      error: false,
    });

    store = reducerApp(store, actionErrorCurrentWeather);

    expect(store.weatherCurrentCity).toEqual({
      loading: false,
      error: true,
      data: error,
    });
  });
});
