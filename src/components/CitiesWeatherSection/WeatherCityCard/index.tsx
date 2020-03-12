import React, { useState, useCallback, useMemo } from 'react';

import WeatherCityCard from './WeatherCityCard';
import { WeatherCityContextProvider } from './WeatherCityCardContext';

import {
  setCityToStorageList,
  deleteCityFromStorageList,
} from '../../../services/savedCitiesListService';

import { IWeatherCity } from '../../../thunks/transformers/transformerWeatherCity';
import { useAnimateCards } from '../../../hooks/useAnimateCards';
import { isObjectEqual } from '../../../utils/isObjectEqual';
import { deletePropsFromData } from '../../../utils/deletePropsFromData';

import './weather-card.scss';

export interface IWeatherCityCardContainer {
  data: IWeatherCity;
  handleDeleteCard: () => void;
  handleOpenMap: () => void;
  handleOpenGraphTemp: () => void;
  handleOpenGraphHumidity: () => void;
  handleAddForecastForCompare: () => void;
  isMapLoading?: boolean;
  isForecastLoading?: boolean;
  isMapError?: boolean;
  isForecastError?: boolean;
}

const areEqual = (
  { data: prevData }: IWeatherCityCardContainer,
  { data: nextData }: IWeatherCityCardContainer,
) => {
  const prevDataForCompare = deletePropsFromData(prevData);
  const nextDataForCompare = deletePropsFromData(nextData);

  return isObjectEqual(prevDataForCompare, nextDataForCompare);
};

const WeatherCityCardContainer: React.FC<IWeatherCityCardContainer> = ({
  data,
  handleDeleteCard,
  handleOpenMap,
  handleOpenGraphTemp,
  handleOpenGraphHumidity,
  handleAddForecastForCompare,
}: IWeatherCityCardContainer) => {
  const { idCity, selected } = data;
  const [isSelected, setIsSelected] = useState(selected);
  const { styleObject, handleDeleteCardAnimation } = useAnimateCards(handleDeleteCard);

  const handleChangeSelect = useCallback(
    (value: number) => {
      const select = Boolean(value);

      setIsSelected(select);

      if (select) {
        setCityToStorageList(idCity);
        return;
      }

      deleteCityFromStorageList(idCity);
    },
    [idCity],
  );

  const WeatherCityCardMemo = useMemo(
    () => (
      <WeatherCityCard
        data={data}
        isSelected={isSelected}
        handleDeleteCard={handleDeleteCardAnimation}
        handleChangeSelect={handleChangeSelect}
        handleOpenMap={handleOpenMap}
        handleOpenGraphTemp={handleOpenGraphTemp}
        handleOpenGraphHumidity={handleOpenGraphHumidity}
        handleAddForecastForCompare={handleAddForecastForCompare}
        styleObject={styleObject}
      />
    ),
    [
      data,
      isSelected,
      handleDeleteCardAnimation,
      handleChangeSelect,
      handleOpenMap,
      handleOpenGraphTemp,
      handleOpenGraphHumidity,
      handleAddForecastForCompare,
      styleObject,
    ],
  );

  return (
    <WeatherCityContextProvider value={data}>{WeatherCityCardMemo}</WeatherCityContextProvider>
  );
};

export default React.memo(WeatherCityCardContainer, areEqual);
