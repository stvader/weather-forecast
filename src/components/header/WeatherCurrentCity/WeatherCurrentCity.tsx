import React, { useContext } from 'react';
import { Typography } from 'antd';

import TemperatureCurrentCity from './TemperatureCurrentCity';
import WeatherCurrentDetails from './WeatherCurrentDetails';
import { WeatherCurrentContext } from './WeatherCurrentCityContext';

import { bc } from '../../../utils/bem-cn';

import './weather-current-city.scss';

const { Title } = Typography;

const b = bc('current-weather-block');

const WeatherCurrentCity: React.FC = () => {
  const { placeName, country } = useContext(WeatherCurrentContext);

  return (
    <div className={b()}>
      <div className={b('main-info-block')}>
        <Title level={4}>{`${placeName}, ${country}`}</Title>
        <TemperatureCurrentCity />
      </div>

      <WeatherCurrentDetails />
    </div>
  );
};

export default WeatherCurrentCity;
