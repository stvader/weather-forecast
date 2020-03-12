import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const TemperatureCurrentCity: React.FC<any> = ({ temperature }: any) => (
  <Title level={3}>{temperature}</Title>
);

export default TemperatureCurrentCity;
