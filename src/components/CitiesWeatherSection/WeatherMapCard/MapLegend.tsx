import React from 'react';
import { Typography } from 'antd';

import { CELSIUS_SIGN } from '../../../constants/temperatureUnitConstants';
import { bc } from '../../../utils/bem-cn';

const { Text } = Typography;

const b = bc('map-block');
const bemLegendScale = b('legend-scale-value');

const MapLegend: React.FC = () => (
  <div className={b('legend-wrapper')}>
    <div className={b('legend-name')}>
      <Text>Temp</Text>
    </div>
    <div className={b('legend-scale-line')}>
      <div className={bemLegendScale.mix(b('legend-scale-min-value'))}>
        <Text>{`-65 ${CELSIUS_SIGN}`}</Text>
      </div>
      <div className={bemLegendScale.mix(b('legend-scale-avg-value'))}>
        <Text>{`0 ${CELSIUS_SIGN}`}</Text>
      </div>
      <div className={bemLegendScale.mix(b('legend-scale-max-value'))}>
        <Text>{`30 ${CELSIUS_SIGN}`}</Text>
      </div>
    </div>
  </div>
);

export default MapLegend;
