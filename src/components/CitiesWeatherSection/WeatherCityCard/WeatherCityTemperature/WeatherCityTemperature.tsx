import React from 'react';

import { Typography } from 'antd';

const { Title } = Typography;

interface IWeatherCityTemperature {
  temperature: string;
}

const WeatherCityTemperature: React.FC<IWeatherCityTemperature> = ({
  temperature,
}: IWeatherCityTemperature) => <Title level={4}>{temperature}</Title>;

export default WeatherCityTemperature;
