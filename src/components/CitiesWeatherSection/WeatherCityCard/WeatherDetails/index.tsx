import React, { useContext, useMemo } from 'react';

import { ColumnProps } from 'antd/es/table';

import WeatherDetails from './WeatherDeatails';
import { WeatherCityContext } from '../WeatherCityCardContext';
import WindCityWeather from '../../../WindCityWeather';

const columns: ColumnProps<any>[] = [
  {
    title: 'Wind',
    dataIndex: 'wind',
    key: 'wind',
  },
  {
    title: 'Cloudiness',
    dataIndex: 'cloudiness',
    key: 'cloudiness',
  },
  {
    title: 'Pressure',
    dataIndex: 'pressure',
    key: 'pressure',
  },
  {
    title: 'Humidity',
    dataIndex: 'humidity',
    key: 'humidity',
  },
  {
    title: 'Geo coords',
    dataIndex: 'coords',
    key: 'coords',
  },
];

const WeatherDetailsContainer: React.FC<any> = () => {
  const {
    wind: { direction, speed },
    cloudiness,
    pressure,
    humidity,
    coord: { lon, lat },
  } = useContext(WeatherCityContext);

  const data = useMemo(
    () => [
      {
        key: '1',
        wind: <WindCityWeather direction={direction} speed={speed} />,
        cloudiness,
        pressure: `${pressure} hpa`,
        humidity: `${humidity}%`,
        coords: `[${lon}, ${lat}]`,
      },
    ],
    [direction, speed, cloudiness, pressure, humidity, lon, lat],
  );

  return <WeatherDetails columns={columns} data={data} />;
};

export default React.memo(WeatherDetailsContainer);
