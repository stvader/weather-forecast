import uuid from 'uuid/v4';

import { getForecastForCity, IForecastCity } from '../../utils/getForecastForCity';

export interface ICityForeCast {
  id: any;
  placeName: string;
  forecast: IForecastCity[];
}

const transformDataCityForecast = ({ city: { name, country }, list }: any): ICityForeCast => ({
  id: uuid(),
  placeName: `${name}, ${country}`,
  forecast: getForecastForCity(list),
});

export default transformDataCityForecast;
