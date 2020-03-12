import React from 'react';
import { Table } from 'antd';

import { ColumnProps } from 'antd/es/table';

interface IWeatherDetails {
  columns: ColumnProps<any>[];
  data?: any;
}

const WeatherDetails: React.FC<any> = ({ data, columns }: IWeatherDetails) => (
  <Table columns={columns} dataSource={data} showHeader bordered pagination={false} size="small" />
);

export default WeatherDetails;
