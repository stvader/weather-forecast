import React from 'react';
import { bc } from '../../../utils/bem-cn';

interface IProps {
  img: string;
}

const b = bc('map-block');

const MapWeatherImage: React.FC<IProps> = ({ img }: IProps) => (
  <img src={img} alt="weather-map" className={b('weather-overlay-image')} />
);

export default MapWeatherImage;
