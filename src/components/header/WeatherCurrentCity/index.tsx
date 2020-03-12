import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { Spin } from 'antd';

import { IAppState, IWeatherCurrentCity } from '../../../reducers/types';
import { IWeatherCurrentPlace } from '../../../thunks/transformers/transformerWeatherCurrentPlace';
import { getCoordsCurrentPlace } from '../../../thunks';
import { selectWeatherCurrent } from '../../../selectors';
import WeatherCurrentCity from './WeatherCurrentCity';
import { WeatherCurrentContextProvider } from './WeatherCurrentCityContext';

interface IWeatherCurrentCityContainer {
  dispatchGetCoordsCurrentPlace: () => void;
  weatherCurrentCity: IWeatherCurrentCity;
}

interface IWeatherViewWrapper {
  data: IWeatherCurrentPlace | undefined;
}

const WeatherViewWrapper: React.FC<IWeatherViewWrapper> = ({ data }: IWeatherViewWrapper) => (
  <WeatherCurrentContextProvider value={data}>
    <WeatherCurrentCity />
  </WeatherCurrentContextProvider>
);

const WeatherCurrentCityContainer: React.FC<IWeatherCurrentCityContainer> = ({
  weatherCurrentCity: { data, loading, error },
  dispatchGetCoordsCurrentPlace,
}: IWeatherCurrentCityContainer) => {
  useEffect(() => {
    dispatchGetCoordsCurrentPlace();
  }, [dispatchGetCoordsCurrentPlace]);

  const weatherViewMemo = useMemo(() => <WeatherViewWrapper data={data} />, [data]);

  if (loading || !data) {
    return (
      <div>
        <Spin />
      </div>
    );
  }

  if (error) {
    return <div>Ooops... Something wrong</div>;
  }

  return <div>{weatherViewMemo}</div>;
};

const mapStateToProps = (state: IAppState) => ({
  weatherCurrentCity: selectWeatherCurrent(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  dispatchGetCoordsCurrentPlace: () => {
    dispatch(getCoordsCurrentPlace());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeatherCurrentCityContainer);
