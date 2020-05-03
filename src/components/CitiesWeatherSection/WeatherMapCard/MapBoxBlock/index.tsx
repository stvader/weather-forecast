import React, { useState, useCallback, useContext } from 'react';

import { WeatherMapContext } from '../WatherMapContext';
import { MAP_ZOOM, MAP_WIDTH, MAP_HEIGHT } from '../../../../constants/mapConstants';
import MapBoxBlock, { IMapBoxViewport } from './MapBoxBlock';

interface IViewPort {
  width: number;
  height: number;
  latitude: number;
  longitude: number;
  zoom: number;
}

const MapBoxContainer: React.FC = () => {
  const {
    coord: { lon, lat },
  } = useContext(WeatherMapContext);

  const [viewport, setViewPort] = useState<IViewPort>({
    width: MAP_WIDTH,
    height: MAP_HEIGHT,
    latitude: lat,
    longitude: lon,
    zoom: MAP_ZOOM,
  });

  const onViewportChange = useCallback(
    (viewportArg: IMapBoxViewport) =>
      setViewPort((prev: IViewPort) => ({ ...prev, ...viewportArg })),
    [setViewPort],
  );

  return <MapBoxBlock viewport={viewport} onViewportChange={onViewportChange} />;
};

export default MapBoxContainer;
