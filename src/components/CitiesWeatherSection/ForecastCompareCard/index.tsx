import React from 'react';

import ForecastCompareCard from './ForecastCompareCard';
import { ForecastCompareCardContextProvider } from './ForecastCompareCardContext';
import { ICityForeCast } from '../../../thunks/transformers/transformDataCityForecast';
import {
  getListForecastWithColors,
  IForecastCityWithColor,
} from '../../../utils/getListForecastWithColors';
import { useAnimateCards } from '../../../hooks/useAnimateCards';

import { isEqualCollections } from '../../../utils/isEqualCollections';

import './forecast-compare-card.scss';

interface IProps {
  listForecast: ICityForeCast[];
  handleDeleteCard: () => void;
}

const areEqual = (
  { listForecast: prevListForecast }: IProps,
  { listForecast: nextListForecast }: IProps,
) => isEqualCollections(prevListForecast, nextListForecast);

const ForecastCompareCardContainer: React.FC<IProps> = ({
  handleDeleteCard,
  listForecast,
}: IProps) => {
  const listForecastExtra: IForecastCityWithColor[] = listForecast.map(
    (item: ICityForeCast, i: number) => ({
      ...item,
      color: getListForecastWithColors(i),
    }),
  );

  const { styleObject, handleDeleteCardAnimation } = useAnimateCards(handleDeleteCard);

  return (
    <ForecastCompareCardContextProvider value={listForecastExtra}>
      <ForecastCompareCard handleDeleteCard={handleDeleteCardAnimation} styleObject={styleObject} />
    </ForecastCompareCardContextProvider>
  );
};

export default React.memo(ForecastCompareCardContainer, areEqual);
