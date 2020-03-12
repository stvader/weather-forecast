import React, { useEffect, useCallback, useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import arrayMove from 'array-move';

import { IAppState, TSavedCitiesList, TCityWeatherCollection } from '../../reducers/types';

import { selectSavedCitiesList, selectCityWeatherCollection } from '../../selectors';
import {
  deleteCityWeatherCard,
  changeSequenceCitiesWeather,
  addGraphForecastTempMemorize,
} from '../../actions';
import { fetchCityWeatherThroughId } from '../../utils/fetchWeatherHoc';
import { fetchSavedCitiesWeather } from '../../utils/fetchSavedCitiesWeather';
import {
  fetchCityWeatherMap,
  fetchCityWeatherForecast,
  fetchForecastForCompare,
} from '../../thunks';

import CitiesWeatherSection from './CitiesWeatherSection';
import SortableList from './SortableList';

import { CityWeatherSectionContextProvider } from './CityWeatherSectionContext';

import './cities-weather-section.scss';
import { ICoords } from '../../thunks/transformers/transformerWeatherCurrentPlace';
import { TIME_FADE } from '../../constants/animationFade';
import { IForecastCity } from '../../utils/getForecastForCity';
import { TGraphType } from '../../utils/getGraphCardHeaderAdditinalTitle';

interface ICityWeatherSection {
  savedCitiesList: TSavedCitiesList;
  cityWeatherCollection: TCityWeatherCollection;
  dispatchCityWeather: (cityId: number, isSelected: boolean) => void;
  dispatchSavedCitiesWeather: (savedCitiesList: TSavedCitiesList) => void;
  dispatchDeleteCard: (id: any) => void;
  dispatchSequenceCitiesWeather: (newCityWeather: TCityWeatherCollection) => void;
  dispatchOpenCityMap: (coord: ICoords, id: number) => void;
  dispatchOpenCityGhaphTemp: (coord: ICoords, cityBlockId: any, graphType: TGraphType) => void;
  dispatchAddForecastForCompare: (coord: ICoords, id: number) => void;
  dispatchAddGraphForecastTempMemorize: (
    savedForecast: IForecastCity,
    graphType: TGraphType,
  ) => void;
}

const CityWeatherSectionContainer: React.FC<ICityWeatherSection> = ({
  savedCitiesList,
  cityWeatherCollection,
  dispatchCityWeather,
  dispatchSavedCitiesWeather,
  dispatchDeleteCard,
  dispatchSequenceCitiesWeather,
  dispatchOpenCityMap,
  dispatchOpenCityGhaphTemp,
  dispatchAddForecastForCompare,
  dispatchAddGraphForecastTempMemorize,
}: ICityWeatherSection) => {
  useEffect(() => {
    if (savedCitiesList) {
      dispatchSavedCitiesWeather(savedCitiesList);
    }
  }, [dispatchCityWeather, savedCitiesList, dispatchSavedCitiesWeather]);

  const handleOpenMap = useCallback(
    (coord: ICoords, id: number) => {
      dispatchOpenCityMap(coord, id);
    },
    [dispatchOpenCityMap],
  );

  const handleOpenGraph = useCallback(
    (coord: ICoords, idCard: number, graphType: TGraphType) => {
      const weatherCard = cityWeatherCollection.find(({ id }: any) => id === idCard);

      // @ts-ignore
      const savedForecast = weatherCard && weatherCard.forecast;
      if (savedForecast) {
        dispatchAddGraphForecastTempMemorize(savedForecast, graphType);
        return;
      }

      dispatchOpenCityGhaphTemp(coord, idCard, graphType);
    },
    [dispatchOpenCityGhaphTemp, cityWeatherCollection, dispatchAddGraphForecastTempMemorize],
  );

  const handleAddForecastForCompare = useCallback(
    (coord: ICoords, idCard: number) => {
      dispatchAddForecastForCompare(coord, idCard);
    },
    [dispatchAddForecastForCompare],
  );

  const handleDeleteCard = useCallback(
    (id: any) => {
      setTimeout(() => {
        dispatchDeleteCard(id);
      }, TIME_FADE);
    },
    [dispatchDeleteCard],
  );

  const onSortEnd = useCallback(
    ({ oldIndex, newIndex }: any) => {
      const newCityWeather = arrayMove(cityWeatherCollection, oldIndex, newIndex);
      dispatchSequenceCitiesWeather(newCityWeather);
    },
    [cityWeatherCollection, dispatchSequenceCitiesWeather],
  );

  const contextValue = useMemo(
    () => ({
      handleDeleteCard,
      handleOpenMap,
      handleOpenGraph,
      handleAddForecastForCompare,
    }),
    [handleDeleteCard, handleOpenMap, handleOpenGraph, handleAddForecastForCompare],
  );

  return (
    <CityWeatherSectionContextProvider value={contextValue}>
      <CitiesWeatherSection>
        <SortableList collection={cityWeatherCollection} onSortEnd={onSortEnd} />
      </CitiesWeatherSection>
    </CityWeatherSectionContextProvider>
  );
};

const mapStateToProps = (state: IAppState) => ({
  savedCitiesList: selectSavedCitiesList(state),
  cityWeatherCollection: selectCityWeatherCollection(state),
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      dispatchCityWeather: fetchCityWeatherThroughId,
      dispatchSavedCitiesWeather: fetchSavedCitiesWeather,
      dispatchDeleteCard: deleteCityWeatherCard,
      dispatchSequenceCitiesWeather: changeSequenceCitiesWeather,
      dispatchOpenCityMap: fetchCityWeatherMap,
      dispatchOpenCityGhaphTemp: fetchCityWeatherForecast,
      dispatchAddForecastForCompare: fetchForecastForCompare,
      dispatchAddGraphForecastTempMemorize: addGraphForecastTempMemorize,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CityWeatherSectionContainer);
