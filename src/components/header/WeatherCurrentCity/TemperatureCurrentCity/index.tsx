import React from 'react';
import { connect } from 'react-redux';

import { IAppState } from '../../../../reducers/types';
import { selectTempCurrent } from '../../../../selectors';
import TemperatureCurrentCity from './TemperatureCurrentCity';
import { getTemperatureView, ITemperatureView } from '../../../../utils/getTemperatureView';

interface ITemperatureCurrentCity {
  temperatureData: ITemperatureView;
}

const TemperatureCurrentCityContainer: React.FC<ITemperatureCurrentCity> = ({
  temperatureData,
}: ITemperatureCurrentCity) => {
  const temperature = getTemperatureView(temperatureData);

  return <TemperatureCurrentCity temperature={temperature} />;
};

const mapStateToProps = (state: IAppState) => ({
  temperatureData: selectTempCurrent(state),
});

export default connect(mapStateToProps)(TemperatureCurrentCityContainer);
