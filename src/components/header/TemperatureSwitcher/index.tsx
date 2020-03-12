import React from 'react';
import { connect } from 'react-redux';

import { IAppState } from '../../../reducers/types';
import { switchTemperatureUnit } from '../../../actions';
import { selectTemperatureSwitcher } from '../../../selectors';
import { CELSIUS, TempUnit } from '../../../constants/temperatureUnitConstants';

import TemperatureSwitcher from './TemperatureSwitcher';

import './temperature-switcher.scss';

interface ITemperatureSwitcher {
  temeratureUnit: TempUnit;
  handleChange: () => void;
}

const TemperatureSwitcherContainer: React.FC<ITemperatureSwitcher> = ({
  temeratureUnit,
  handleChange,
}: ITemperatureSwitcher) => {
  const isChecked = temeratureUnit === CELSIUS;

  return <TemperatureSwitcher isChecked={isChecked} handleChange={handleChange} />;
};

const mapStateToProps = (state: IAppState) => ({
  temeratureUnit: selectTemperatureSwitcher(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  handleChange: () => {
    dispatch(switchTemperatureUnit());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TemperatureSwitcherContainer);
