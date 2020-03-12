import React, { useMemo } from 'react';

import { ForecastWeatherCityCardContextProvider } from './ForecastWeatherCityCardContext';
import { IForecastCity } from '../../../utils/getForecastForCity';
import ForecastWeatherCityCard from './ForecastWeatherCityCard';
import { useAnimateCards } from '../../../hooks/useAnimateCards';
import {
  getGraphCardHeaderAdditinalTitle,
  TGraphType,
} from '../../../utils/getGraphCardHeaderAdditinalTitle';
import { isEqualCollections } from '../../../utils/isEqualCollections';

import './forecast-weather-city-card.scss';

interface IProps {
  graphType: TGraphType;
  forecast: IForecastCity[];
  placeName: string;
  handleDeleteCard: () => void;
}

const areEqual = (
  { placeName: prevPlaceName, forecast: prevForecast }: IProps,
  { placeName: nextPlaceName, forecast: nextForecast }: IProps,
) => prevPlaceName === nextPlaceName && isEqualCollections(prevForecast, nextForecast);

const ForecastWeatherCityCardContainer: React.FC<IProps> = ({
  graphType,
  placeName,
  handleDeleteCard,
  forecast,
}: IProps) => {
  const { styleObject, handleDeleteCardAnimation } = useAnimateCards(handleDeleteCard);
  const headerAdditionalTitle = useMemo(() => getGraphCardHeaderAdditinalTitle(graphType), [
    graphType,
  ]);

  const contextValue = useMemo(
    () => ({
      graphType,
      forecast,
    }),
    [graphType, forecast],
  );

  return (
    <ForecastWeatherCityCardContextProvider value={contextValue}>
      <ForecastWeatherCityCard
        headerAdditionalTitle={headerAdditionalTitle}
        placeName={placeName}
        handleDeleteCard={handleDeleteCardAnimation}
        styleObject={styleObject}
      />
    </ForecastWeatherCityCardContextProvider>
  );
};

export default React.memo(ForecastWeatherCityCardContainer, areEqual);
