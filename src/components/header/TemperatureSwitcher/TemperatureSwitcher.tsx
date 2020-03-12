import React from 'react';
import { Switch, Typography } from 'antd';
import { CELSIUS_SIGN, FAHRENHEIT_SIGN } from '../../../constants/temperatureUnitConstants';

import { bc, bcAnt } from '../../../utils/bem-cn';

const { Text } = Typography;

interface ITemperatureSwitcherView {
  isChecked: boolean;
  handleChange: any;
}

const b = bc('tempereture-switcher');
const bAnt = bcAnt(b);

const TemperatureSwitcher: React.FC<ITemperatureSwitcherView> = ({
  isChecked,
  handleChange,
}: ITemperatureSwitcherView) => (
  <div className={b('wrapper')}>
    <Text strong className={bAnt('temp-unit-note')}>
      {FAHRENHEIT_SIGN}
    </Text>
    <Switch checked={isChecked} defaultChecked onChange={handleChange} />
    <Text strong className={bAnt(['temp-unit-note', 'temp-unit-note-colored'])}>
      {CELSIUS_SIGN}
    </Text>
  </div>
);

export default TemperatureSwitcher;
