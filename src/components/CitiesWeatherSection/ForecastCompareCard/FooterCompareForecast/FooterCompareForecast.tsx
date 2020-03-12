import React from 'react';

import LegendElem from './LegendElem';
import { IForecastCityWithColor } from '../../../../utils/getListForecastWithColors';

import { bc } from '../../../../utils/bem-cn';

interface IProps {
  forecastList: IForecastCityWithColor[];
}

const b = bc('forecast-compare');

const FooterCompareForecast: React.FC<IProps> = ({ forecastList }: IProps) => (
  <div className={b('footer')}>
    {forecastList.map((item: IForecastCityWithColor) => (
      <LegendElem color={item.color} placeName={item.placeName} key={item.id} />
    ))}
  </div>
);

export default FooterCompareForecast;
