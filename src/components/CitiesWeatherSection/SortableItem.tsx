import React, { useContext } from 'react';
import { SortableElement } from 'react-sortable-hoc';

import WeatherCityCard from './WeatherCityCard';
import WeatherMapCard from './WeatherMapCard';
import ForecastWeatherCityCard from './ForecastWeatherCityCard';
import ForecastCompareCard from './ForecastCompareCard';

import { CityWeatherSectionContext } from './CityWeatherSectionContext';

import { CardType } from '../../constants/weatherCollectionElements';
import { TEMP, HUMIDITY } from '../../utils/getGraphCardHeaderAdditinalTitle';

const SortableItem = SortableElement(({ weatherData }: any) => {
  const { id, type, coord, data, placeName, forecast, list, graphType } = weatherData;
  const {
    handleDeleteCard,
    handleOpenMap,
    handleOpenGraph,
    handleAddForecastForCompare,
  } = useContext(CityWeatherSectionContext);

  if (type === CardType.MAP) {
    return (
      <WeatherMapCard
        key={id}
        img={data}
        coord={coord}
        handleDeleteCard={() => handleDeleteCard(id)}
      />
    );
  }

  if (type === CardType.GRAPH) {
    return (
      <ForecastWeatherCityCard
        key={id}
        graphType={graphType}
        placeName={placeName}
        forecast={forecast}
        handleDeleteCard={() => handleDeleteCard(id)}
      />
    );
  }

  if (type === CardType.COMPARE && list && list.length) {
    return (
      <ForecastCompareCard
        key={id}
        handleDeleteCard={() => handleDeleteCard(id)}
        listForecast={list}
      />
    );
  }

  return (
    <WeatherCityCard
      key={id}
      data={weatherData}
      handleDeleteCard={() => handleDeleteCard(id)}
      handleOpenMap={() => handleOpenMap(coord, id)}
      handleOpenGraphTemp={() => handleOpenGraph(coord, id, TEMP)}
      handleOpenGraphHumidity={() => {
        handleOpenGraph(coord, id, HUMIDITY);
      }}
      handleAddForecastForCompare={() => handleAddForecastForCompare(coord, id)}
    />
  );
});

export default SortableItem;
