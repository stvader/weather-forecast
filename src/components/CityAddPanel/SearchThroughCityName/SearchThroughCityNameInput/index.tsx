import React, { useContext } from 'react';

import { CityAddPanelContext } from '../../CityAddPanelContext';

import SearchThroughCityNameInput from './SearchThroughCityNameInput';

const SearchThroughCityNameContainer: React.FC = () => {
  const { inputSearchAddCity, handleInputCityNameChange } = useContext(CityAddPanelContext);

  return (
    <SearchThroughCityNameInput
      inputSearchAddCity={inputSearchAddCity}
      handleInputCityNameChange={handleInputCityNameChange}
    />
  );
};

export default SearchThroughCityNameContainer;
