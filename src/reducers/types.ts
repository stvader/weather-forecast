import { TempUnit } from '../constants/temperatureUnitConstants';

import {
  IWeatherCurrentPlace,
  ICoords,
} from '../thunks/transformers/transformerWeatherCurrentPlace';

import { TWeatherCollectionElement } from '../constants/weatherCollectionElements';
import { IWeatherCity } from '../thunks/transformers/transformerWeatherCity';
import { ICityForeCast } from '../thunks/transformers/transformDataCityForecast';

export interface IWeatherCurrentCity {
  loading: boolean;
  error: boolean;
  data?: IWeatherCurrentPlace;
}

export interface ICoordsCurrent {
  loading: boolean;
  error: boolean;
  data?: ICoords;
}

export interface ICityWeatherReq {
  loading: boolean;
  error: boolean;
}

export type TSavedCitiesList = number[] | null;

export interface IWeatherMapData {
  id: number;
  data: string;
  coord: ICoords;
  type: TWeatherCollectionElement;
}

export interface IWeatherCompareBlock {
  id: number;
  type: TWeatherCollectionElement;
  list: ICityForeCast[];
}

export type TCityWeatherCollectionItem = IWeatherCity | IWeatherMapData | IWeatherCompareBlock;

export type TCityWeatherCollection = TCityWeatherCollectionItem[] | [];

export interface IAppState {
  temperatureSwitcher: TempUnit;
  coordsCurrent: ICoordsCurrent;
  weatherCurrentCity: IWeatherCurrentCity;
  savedCitiesList: TSavedCitiesList;
  cityWeatherCollection: TCityWeatherCollection;
  cityWeatherReqState: ICityWeatherReq;
}

export type IActions = { type: string; payload?: any };
