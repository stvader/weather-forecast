import React from 'react';

import { Table } from 'antd';
import { ColumnProps } from 'antd/es/table';

import { ITableColumn, ITableData } from '.';

interface IWeatherCurrentDetailsView {
  columns: ColumnProps<ITableColumn>[];
  data: ITableData;
}

const WeatherCurrentDetails: React.FC<IWeatherCurrentDetailsView> = ({
  data,
  columns,
}: IWeatherCurrentDetailsView) => (
  <Table columns={columns} dataSource={data} showHeader pagination={false} bordered size="small" />
);

export default WeatherCurrentDetails;
