import React from 'react';
import { Typography } from 'antd';

import { bc, bcAnt } from '../../../utils/bem-cn';

const { Text, Title } = Typography;

interface IProps {
  placeName: string;
  headerAdditionalTitle: string;
}

const b = bc('graph-card');
const bAnt = bcAnt(b);

const CardGraphTitleBlock: React.FC<IProps> = ({ placeName, headerAdditionalTitle }: IProps) => (
  <div className={b('header')}>
    <Title level={4} className={bAnt('header-place-name')}>
      {placeName}
    </Title>
    <Text type="secondary" className={bAnt('additional-title')}>
      {headerAdditionalTitle}
    </Text>
  </div>
);

export default CardGraphTitleBlock;
