import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Spin } from 'antd';

import CityAddPanel from './CityAddPanel';

import './city-add-panel.scss';
import {
  fetchCityWeatherThroughCityName,
  fetchCityWeatherThroughCoords,
} from '../../utils/fetchWeatherHoc';

import { CityAddPanelContextProvider } from './CityAddPanelContext';
import { selectCityWeatherReqState } from '../../selectors';
import { IAppState, ICityWeatherReq } from '../../reducers/types';
import { ICoords } from '../../thunks/transformers/transformerWeatherCurrentPlace';
import { getMessageIncorrectCoords } from '../../utils/getMessageIncorrectCoords';

import { bc } from '../../utils/bem-cn';

const b = bc('city-add-panel');

const getRequestStateInfoView = (state: ICityWeatherReq) => {
  const { loading, error } = state;

  let stateView = null;

  if (loading) {
    stateView = <Spin />;
  } else if (error) {
    stateView = <span className={b('error')}>City Weather Error</span>;
  }

  return stateView;
};

interface ICityAddPanelContainer {
  dispatchAddNewCityToList: (cityInput: string, isSelected: boolean) => void;
  dispatchAddNewCityThroughtCoordsToList: (coords: ICoords, isSelected: boolean) => void;
  cityWeatherReqState: ICityWeatherReq;
}

const CityAddPanelContainer: React.FC<ICityAddPanelContainer> = ({
  dispatchAddNewCityToList,
  dispatchAddNewCityThroughtCoordsToList,
  cityWeatherReqState,
}: ICityAddPanelContainer) => {
  const [cityInput, setCityInput] = useState<string>('');
  const [lonInput, setLonInput] = useState<string>('');
  const [latInput, setLatInput] = useState<string>('');
  const [messageIncorrectCoords, setMessageIncorrectCoords] = useState<string>('');

  const requestStateInfoElement = useMemo(() => getRequestStateInfoView(cityWeatherReqState), [
    cityWeatherReqState,
  ]);

  const handleSubmitCityThroughName = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setMessageIncorrectCoords('');
      dispatchAddNewCityToList(cityInput, false);
    },
    [cityInput, dispatchAddNewCityToList],
  );

  useEffect(() => {
    if (!requestStateInfoElement) {
      setCityInput('');
      setLonInput('');
      setLatInput('');
    }
  }, [cityWeatherReqState, requestStateInfoElement]);

  const handleSubmitCityThroughCoord = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setMessageIncorrectCoords('');

      const incorrectMessage = getMessageIncorrectCoords(lonInput, latInput);

      if (incorrectMessage) {
        setMessageIncorrectCoords(incorrectMessage);
        return;
      }

      const coordsData = {
        lon: Number(lonInput),
        lat: Number(latInput),
      };
      dispatchAddNewCityThroughtCoordsToList(coordsData, false);
    },
    [lonInput, latInput, dispatchAddNewCityThroughtCoordsToList, setMessageIncorrectCoords],
  );

  const contextValue = {
    requestStateInfoElement,
    messageIncorrectCoords,
    handleSubmitCityThroughName,
    inputSearchAddCity: cityInput,
    handleInputCityNameChange: setCityInput,
  };

  return (
    <CityAddPanelContextProvider value={contextValue}>
      <CityAddPanel
        inputSearchCoordsLon={lonInput}
        inputSearchCoordsLat={latInput}
        handleSubmitCityThroughCoord={handleSubmitCityThroughCoord}
        handleInputLonChange={setLonInput}
        handleInputLatChange={setLatInput}
      />
    </CityAddPanelContextProvider>
  );
};

const mapStateToProps = (state: IAppState) => ({
  cityWeatherReqState: selectCityWeatherReqState(state),
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      dispatchAddNewCityToList: fetchCityWeatherThroughCityName,
      dispatchAddNewCityThroughtCoordsToList: fetchCityWeatherThroughCoords,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(CityAddPanelContainer);
