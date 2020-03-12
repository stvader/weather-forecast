import React, { useState, useCallback, useContext } from 'react';

import { WeatherMapContext } from '../WatherMapContext';
import { MAP_ZOOM, MAP_WIDTH, MAP_HEIGHT } from '../../../../constants/mapConstants';
import MapBoxBlock, { IMapBoxViewport } from './MapBoxBlock';

const MapBoxContainer: React.FC = () => {
  const {
    coord: { lon, lat },
  } = useContext(WeatherMapContext);

  const [viewport, setViewPort] = useState({
    width: MAP_WIDTH,
    height: MAP_HEIGHT,
    latitude: lat,
    longitude: lon,
    zoom: MAP_ZOOM,
  });

  const onViewportChange = useCallback(
    (viewportArg: IMapBoxViewport) => setViewPort({ ...viewportArg }),
    [setViewPort],
  );

  return <MapBoxBlock viewport={viewport} onViewportChange={onViewportChange} />;
};

export default MapBoxContainer;
