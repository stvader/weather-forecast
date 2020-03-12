import { createSelector } from 'reselect';
import { IAppState } from '../reducers/types';
import { TempUnit } from '../constants/temperatureUnitConstants';

export const selectSavedCitiesList = (state: IAppState) => state.savedCitiesList;

export const selectCityWeatherCollection = (state: IAppState) => state.cityWeatherCollection;

export const selectCityWeatherSection = createSelector(
  selectSavedCitiesList,
  selectCityWeatherCollection,
  (savedCitiesList, cityWeatherCollection) => ({
    savedCitiesList,
    cityWeatherCollection,
  }),
);

export const selectTemperatureSwitcher = (state: IAppState) => state.temperatureSwitcher;

export const selectWeatherCurrent = (state: IAppState) => state.weatherCurrentCity;

export const selectTempCurrent = createSelector(
  selectWeatherCurrent,
  selectTemperatureSwitcher,
  ({ data: { temperature } }: any, temperatureSwitcher: TempUnit) => ({
    temperature,
    temperatureSwitcher,
  }),
);

export const selectStateOfExtraRequest = (state: IAppState, { id: cardId }: any) =>
  // @ts-ignore
  state.cityWeatherCollection.find(({ id }) => id === cardId).cardExtraRequestState;

export const selectCityWeatherReqState = (state: IAppState) => state.cityWeatherReqState;
