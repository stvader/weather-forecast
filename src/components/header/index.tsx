import React from 'react';
import { PageHeader } from 'antd';

import TemperatureSwitcher from './TemperatureSwitcher';
import WeatherCurrentCity from './WeatherCurrentCity';

const Header: React.FC = () => (
  <header>
    <PageHeader backIcon={false} title="" extra={<TemperatureSwitcher />}>
      <WeatherCurrentCity />
    </PageHeader>
  </header>
);

export default Header;
