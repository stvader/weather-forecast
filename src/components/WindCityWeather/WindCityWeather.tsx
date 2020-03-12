import React from 'react';

interface IProps {
  windView: string;
}

const WindCityWeather: React.FC<IProps> = ({ windView }: IProps) => <span>{windView}</span>;

export default WindCityWeather;
