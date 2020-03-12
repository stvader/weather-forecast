import { CELSIUS } from '../constants/temperatureUnitConstants';
import { getCitiesListFromStorage } from '../services/savedCitiesListService';
import { IAppState } from './types';

export const initState: IAppState = {
  temperatureSwitcher: CELSIUS,
  coordsCurrent: {
    loading: false,
    error: false,
  },
  weatherCurrentCity: {
    loading: false,
    error: false,
  },
  savedCitiesList: getCitiesListFromStorage(),
  cityWeatherCollection: [],
  cityWeatherReqState: {
    loading: false,
    error: false,
  },
};
