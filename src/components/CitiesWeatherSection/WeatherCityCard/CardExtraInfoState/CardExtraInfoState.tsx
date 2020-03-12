import React from 'react';
import { Spin } from 'antd';
import { ICardExtraRequestState } from '../../../../thunks/transformers/transformerWeatherCity';
import ErrorElement from '../ErrorElement';
import { bc } from '../../../../utils/bem-cn';

interface IProps {
  stateOfExtraRequest: ICardExtraRequestState;
}

const b = bc('weather-card');

const spinBlock = (
  <div className={b('card-state')}>
    <Spin />
  </div>
);

const CardExtraInfoState: React.FC<IProps> = ({
  stateOfExtraRequest: { isMapLoading, isForecastLoading, isMapError, isForecastError },
}: IProps) => (
  <>
    {isMapLoading && spinBlock}
    {isForecastLoading && spinBlock}
    {isMapError && <ErrorElement text="Map Error" />}
    {isForecastError && <ErrorElement text="Forecast Error" />}
  </>
);

export default CardExtraInfoState;
