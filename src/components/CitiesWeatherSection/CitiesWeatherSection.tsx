import React, { ReactElement } from 'react';
import { bc } from '../../utils/bem-cn';

interface IProps {
  children: ReactElement;
}

const b = bc('city-weather-section');

const CitiesWeatherSection: React.FC<IProps> = ({ children }: IProps) => (
  <section className={b('wrapper')}>
    <div className={b()}>{children}</div>
  </section>
);

export default CitiesWeatherSection;
