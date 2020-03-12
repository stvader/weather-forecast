import { TCityWeatherCollection } from '../reducers/types';
import { getMockCityWeather } from './mockWeatherCity';

export const getMockWeatherCollection = (items: number[]): TCityWeatherCollection =>
  items.map((item: number) => getMockCityWeather(item));
