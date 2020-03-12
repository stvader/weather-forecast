import React from 'react';
import { Card } from 'antd';

import ExtraBlock from '../ExrtaBlock';
import GraphBlock from './GraphBlock';
import FooterCompareForecast from './FooterCompareForecast';
import { IStyledObject } from '../../../hooks/useAnimateCards';

interface IProps {
  handleDeleteCard: () => void;
  styleObject: IStyledObject;
}

const ForecastCompareCard: React.FC<IProps> = ({ handleDeleteCard, styleObject }: IProps) => (
  <Card
    title="Compare Forecast"
    extra={<ExtraBlock handleDelete={handleDeleteCard} />}
    style={styleObject}
  >
    <GraphBlock />
    <FooterCompareForecast />
  </Card>
);

export default ForecastCompareCard;
