import { reducerApp } from '../index';
import * as actions from '../../constants/actionsConstants';
import { getMockCityWeather } from '../../mocks/mockWeatherCity';
import { getMockWeatherCollection } from '../../mocks/mockWeatherCollection';
import { initState } from '../initState';

const actionRequestCityWeather = {
  type: actions.FETCH_CITY_WEATHER_REQUEST,
};

describe('Reducers: get place weather', () => {
  it('should init state of cityWeatherReqState be correct', () => {
    const store = reducerApp(undefined, { type: '' });

    expect(store.cityWeatherReqState).toEqual({
      loading: false,
      error: false,
    });

    expect(store.cityWeatherCollection).toEqual([]);
  });

  it('should request place weather with success', () => {
    const newCityIdForFirstRequest: number = 1;
    const newCityIdForSecondRequest: number = 2;
    const actionSuccessCityWeather = {
      type: actions.FETCH_CITY_WEATHER_SUCCESS,
      payload: getMockCityWeather(newCityIdForFirstRequest),
    };

    const actionSuccessCityWeatherWithAddToCollection = {
      type: actions.FETCH_CITY_WEATHER_SUCCESS,
      payload: getMockCityWeather(newCityIdForSecondRequest),
    };

    let store = reducerApp(initState, actionRequestCityWeather);

    expect(store.cityWeatherReqState).toEqual({
      loading: true,
      error: false,
    });

    store = reducerApp(store, actionSuccessCityWeather);

    expect(store.cityWeatherReqState).toEqual({
      loading: false,
      error: false,
    });

    expect(store.cityWeatherCollection).toEqual([getMockCityWeather(newCityIdForFirstRequest)]);

    store = reducerApp(store, actionSuccessCityWeatherWithAddToCollection);

    expect(store.cityWeatherReqState).toEqual({
      loading: false,
      error: false,
    });

    expect(store.cityWeatherCollection).toEqual(
      getMockWeatherCollection([newCityIdForFirstRequest, newCityIdForSecondRequest]),
    );
  });

  it('should request place weather with error', () => {
    const error = new Error('some error');
    const actionErrorCityWeather = {
      type: actions.FETCH_CITY_WEATHER_ERROR,
      payload: error,
    };
    let store = reducerApp(initState, actionRequestCityWeather);

    expect(store.cityWeatherReqState).toEqual({
      loading: true,
      error: false,
    });

    store = reducerApp(store, actionErrorCityWeather);

    expect(store.cityWeatherReqState).toEqual({
      loading: false,
      error: true,
    });
  });
});
