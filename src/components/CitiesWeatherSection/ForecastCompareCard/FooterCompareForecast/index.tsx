import React, { useContext } from 'react';

import FooterCompareForecast from './FooterCompareForecast';
import { ForecastCompareCardContext } from '../ForecastCompareCardContext';

const FooterCompareForecastContainer: React.FC = () => {
  const forecastList = useContext(ForecastCompareCardContext);

  return <FooterCompareForecast forecastList={forecastList} />;
};

export default FooterCompareForecastContainer;
