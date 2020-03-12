import React from 'react';
import { connect } from 'react-redux';

import CardExtraInfoState from './CardExtraInfoState';
import { IAppState } from '../../../../reducers/types';
import { selectStateOfExtraRequest } from '../../../../selectors';
import { ICardExtraRequestState } from '../../../../thunks/transformers/transformerWeatherCity';

interface IProps {
  id: number;
  stateOfExtraRequest: ICardExtraRequestState;
}

const CardExtraInfoStateContainer: React.FC<IProps> = ({ stateOfExtraRequest }: IProps) => (
  <CardExtraInfoState stateOfExtraRequest={stateOfExtraRequest} />
);

const mapStateToProps = (state: IAppState, props: any) => ({
  stateOfExtraRequest: selectStateOfExtraRequest(state, props),
});

export default connect(mapStateToProps)(CardExtraInfoStateContainer);
