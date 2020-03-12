import React from 'react';
import { Card } from 'antd';

import MapBox from './MapBoxBlock';
import MapWeatherImage from './MapWeatherImage';
import ExtraBlock from '../ExrtaBlock';
import { IStyledObject } from '../../../hooks/useAnimateCards';
import { bc } from '../../../utils/bem-cn';
import MapLegend from './MapLegend';

interface IProps {
  styleObject: IStyledObject;
  img: string;
  handleDeleteCard: () => void;
}

const b = bc('map-block');

const WeatherMapCard: React.FC<IProps> = ({ styleObject, img, handleDeleteCard }: IProps) => (
  <Card extra={<ExtraBlock handleDelete={handleDeleteCard} />} style={styleObject}>
    <div className={b('wrapper')}>
      <div className={b()}>
        <MapBox />
      </div>
      <div className={b('weather')}>
        <MapWeatherImage img={img} />
      </div>
    </div>
    <MapLegend />
  </Card>
);
export default WeatherMapCard;
