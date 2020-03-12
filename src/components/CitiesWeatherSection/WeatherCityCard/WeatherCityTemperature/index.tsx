import React, { useContext, useMemo } from 'react';
import { connect } from 'react-redux';

import { WeatherCityContext } from '../WeatherCityCardContext';
import { getTemperatureView } from '../../../../utils/getTemperatureView';
import { IAppState } from '../../../../reducers/types';
import { selectTemperatureSwitcher } from '../../../../selectors';
import WeatherCityTemperature from './WeatherCityTemperature';
import { TempUnit } from '../../../../constants/temperatureUnitConstants';

interface IWeatherCityTemperatureContainer {
  temperatureSwitcher: TempUnit;
}

const WeatherCityTemperatureContainer: React.FC<IWeatherCityTemperatureContainer> = ({
  temperatureSwitcher,
}: IWeatherCityTemperatureContainer) => {
  const { temperature } = useContext(WeatherCityContext);
  const temperatureView = useMemo(() => getTemperatureView({ temperature, temperatureSwitcher }), [
    temperature,
    temperatureSwitcher,
  ]);

  return <WeatherCityTemperature temperature={temperatureView} />;
};

const mapStateToProps = (state: IAppState) => ({
  temperatureSwitcher: selectTemperatureSwitcher(state),
});

export default connect(mapStateToProps)(WeatherCityTemperatureContainer);
