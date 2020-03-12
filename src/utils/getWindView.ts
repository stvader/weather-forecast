import { TempUnit, CELSIUS } from '../constants/temperatureUnitConstants';
import { convertSpeedFromMetresToMiles } from './speedConvertor';

interface IWindSpeedView {
  temperatureSwitcher: TempUnit;
  speed: number;
}

const getWindSpeedView = ({ temperatureSwitcher, speed }: IWindSpeedView) => {
  if (temperatureSwitcher === CELSIUS) {
    return `${speed} m/s`;
  }

  return `${convertSpeedFromMetresToMiles(speed)} mi/s`;
};

interface IWindView {
  speed: number;
  direction: string;
  temperatureSwitcher: TempUnit;
}

export const getWindView = ({ speed, direction, temperatureSwitcher }: IWindView) => {
  if (!speed && !direction) {
    return '';
  }

  if (!speed) {
    return direction;
  }

  if (!direction) {
    return getWindSpeedView({ temperatureSwitcher, speed });
  }

  return `${direction}, ${getWindSpeedView({ temperatureSwitcher, speed })}`;
};
