import React from 'react';

import LegendElem from './LegendElem';

import './legend-element.scss';

interface IProps {
  color: string;
  placeName: string;
}

const LegendElemContainer: React.FC<IProps> = ({ color, placeName }: IProps) => (
  <LegendElem color={color} placeName={placeName} />
);

export default LegendElemContainer;
