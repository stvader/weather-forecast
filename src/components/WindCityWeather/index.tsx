import React, { useMemo } from 'react';
import { connect } from 'react-redux';

import WindCityWeather from './WindCityWeather';
import { selectTemperatureSwitcher } from '../../selectors';
import { IAppState } from '../../reducers/types';
import { TempUnit } from '../../constants/temperatureUnitConstants';
import { getWindView } from '../../utils/getWindView';

interface IProps {
  direction: string;
  speed: number;
  temperatureSwitcher: TempUnit;
}

const WindCityWeatherContainer: React.FC<IProps> = ({
  direction,
  speed,
  temperatureSwitcher,
}: IProps) => {
  const windView = useMemo(
    () =>
      getWindView({
        speed,
        direction,
        temperatureSwitcher,
      }),
    [speed, direction, temperatureSwitcher],
  );

  return <WindCityWeather windView={windView} />;
};

const mapStateToProps = (state: IAppState) => ({
  temperatureSwitcher: selectTemperatureSwitcher(state),
});

export default connect(mapStateToProps)(WindCityWeatherContainer);
