import React, { useContext, ReactElement } from 'react';

import { ColumnProps } from 'antd/es/table';

import { WeatherCurrentContext } from '../WeatherCurrentCityContext';
import WeatherCurrentDetails from './WeatherCurrentDetails';
import WindCityWeather from '../../../WindCityWeather';

export interface ITableColumn {
  key: string;
  wind: ReactElement;
  cloudiness: string;
  pressure: string;
  humidity: string;
  sunrise: string;
  sunset: string;
  coords: string;
}

export type ITableData = ITableColumn[];

const columns: ColumnProps<ITableColumn>[] = [
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
    title: 'Sunrise',
    dataIndex: 'sunrise',
    key: 'sunrise',
  },
  {
    title: 'Sunset',
    dataIndex: 'sunset',
    key: 'sunset',
  },
  {
    title: 'Geo coords',
    dataIndex: 'coords',
    key: 'coords',
  },
];

const WeatherCurrentDetailsContainer: React.FC<any> = () => {
  const {
    wind: { direction, speed },
    cloudiness,
    pressure,
    humidity,
    sunrise,
    sunset,
    coord: { lon, lat },
  } = useContext(WeatherCurrentContext);

  const data: ITableData = [
    {
      key: '1',
      wind: <WindCityWeather direction={direction} speed={speed} />,
      cloudiness,
      pressure: `${pressure} hpa`,
      humidity: `${humidity}%`,
      sunrise,
      sunset,
      coords: `[${lon}, ${lat}]`,
    },
  ];

  return <WeatherCurrentDetails data={data} columns={columns} />;
};

export default WeatherCurrentDetailsContainer;
