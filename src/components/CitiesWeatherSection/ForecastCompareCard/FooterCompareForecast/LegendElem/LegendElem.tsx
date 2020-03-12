import React from 'react';

import { bc } from '../../../../../utils/bem-cn';

interface IProps {
  color: string;
  placeName: string;
}

const b = bc('compare-legend');

const LegendElem: React.FC<IProps> = ({ color, placeName }: IProps) => (
  <span className={b('point')}>
    <svg className={b('point-svg')}>
      <circle fill={color} className={b('point-circle')} />
    </svg>
    {placeName}
  </span>
);

export default LegendElem;
