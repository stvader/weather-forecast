import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Table } from 'antd';
import WeatherCurrentDetails from '../WeatherCurrentDetails';

configure({ adapter: new Adapter() });

const mockColumns = [
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

const mockData = [
  {
    key: '1',
    wind: `North, 5 m/h`,
    cloudiness: 'cloudness',
    pressure: `100 hpa`,
    humidity: `98%`,
    sunrise: '9:4',
    sunset: '9:5',
    coords: `[50, 50]`,
  },
];

describe('TemperatureSwitcher', () => {
  it('render TemperatureSwitcher', () => {
    const component = shallow(<WeatherCurrentDetails columns={mockColumns} data={mockData} />);

    const table = component.find(Table);

    expect(component).toMatchSnapshot();
    expect(table).toBeDefined();
    expect(table.prop('columns')).toBe(mockColumns);
    expect(table.prop('dataSource')).toBe(mockData);
    expect(table.prop('showHeader')).toBe(true);
    expect(table.prop('pagination')).toBe(false);
    expect(table.prop('bordered')).toBe(true);
    expect(table.prop('size')).toBe('small');
  });
});
