import React from 'react';

import { WeatherMapContextProvider } from './WatherMapContext';
import WeatherMapCard from './WeatherMapCard';
import { ICoords } from '../../../thunks/transformers/transformerWeatherCurrentPlace';
import { useAnimateCards } from '../../../hooks/useAnimateCards';

import { isObjectEqual } from '../../../utils/isObjectEqual';

import './weather-map-card.scss';

interface IProps {
  img: string;
  coord: ICoords;
  handleDeleteCard: () => void;
}

const areEqual = ({ coord: prevCoords }: IProps, { coord: nextCoord }: IProps) =>
  isObjectEqual(prevCoords, nextCoord);

const WeatherMapCardContainer: React.FC<IProps> = ({ img, coord, handleDeleteCard }: IProps) => {
  const { styleObject, handleDeleteCardAnimation } = useAnimateCards(handleDeleteCard);

  return (
    <WeatherMapContextProvider value={{ coord }}>
      <WeatherMapCard
        styleObject={styleObject}
        img={img}
        handleDeleteCard={handleDeleteCardAnimation}
      />
    </WeatherMapContextProvider>
  );
};

export default React.memo(WeatherMapCardContainer, areEqual);
