import React, { useContext } from 'react';

import { CityAddPanelContext } from '../CityAddPanelContext';

import SearchThroughCityName from './SearchThroughCityName';

const SearchThroughCityNameContainer: React.FC = () => {
  const { handleSubmitCityThroughName } = useContext(CityAddPanelContext);

  return <SearchThroughCityName handleSubmitCityThroughName={handleSubmitCityThroughName} />;
};

export default SearchThroughCityNameContainer;
