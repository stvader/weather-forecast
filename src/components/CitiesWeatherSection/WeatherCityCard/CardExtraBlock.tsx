import React from 'react';
import { Rate } from 'antd';
import { bc, bcAnt } from '../../../utils/bem-cn';

import ExtraBlock from '../ExrtaBlock';

interface ICardExtraBlock {
  value: number;
  handleChange: (valuePoint: any) => void;
  handleDeleteCard: () => void;
}

const b = bc('weather-card');
const bAnt = bcAnt(b);

const CardExtraBlock: React.FC<ICardExtraBlock> = ({
  value,
  handleChange,
  handleDeleteCard,
}: ICardExtraBlock) => (
  <ExtraBlock handleDelete={handleDeleteCard}>
    <Rate
      className={bAnt('selected-city')}
      count={1}
      value={value}
      onChange={(valuePoint: any) => handleChange(valuePoint)}
    />
  </ExtraBlock>
);

export default CardExtraBlock;
