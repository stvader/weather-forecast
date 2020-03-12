import React from 'react';
import { Card } from 'antd';

import ExtraBlock from '../ExrtaBlock';
import GraphBlock from './GraphBlock';
import { IStyledObject } from '../../../hooks/useAnimateCards';
import CardGraphTitleBlock from './CardGraphTitleBlock';
import { TGtaphTypeHeader } from '../../../utils/getGraphCardHeaderAdditinalTitle';
import { bc, bcAnt } from '../../../utils/bem-cn';

interface IProps {
  placeName: string;
  handleDeleteCard: () => void;
  styleObject: IStyledObject;
  headerAdditionalTitle: TGtaphTypeHeader;
}

const b = bc('weather-card');
const bAnt = bcAnt(b);

const ForecastWeatherCityCard: React.FC<IProps> = ({
  placeName,
  handleDeleteCard,
  styleObject,
  headerAdditionalTitle,
}: IProps) => (
  <Card
    title={
      <CardGraphTitleBlock placeName={placeName} headerAdditionalTitle={headerAdditionalTitle} />
    }
    className={bAnt()}
    style={styleObject}
    extra={<ExtraBlock handleDelete={handleDeleteCard} />}
  >
    <GraphBlock />
  </Card>
);

export default ForecastWeatherCityCard;
