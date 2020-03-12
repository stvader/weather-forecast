import React from 'react';
import MapGL from 'react-map-gl';

import { MAP_BOX_TOKEN, MAP_BOX_STYLE } from '../../../../config';

export interface IMapBoxViewport {
  width: number;
  height: number;
  latitude: number;
  longitude: number;
  zoom: number;
}

interface IProps {
  viewport: IMapBoxViewport;
  onViewportChange: (viewport: IMapBoxViewport) => void;
}

const MapBoxBlock: React.FC<IProps> = ({ viewport, onViewportChange }: IProps) => (
  <MapGL
    {...viewport}
    mapboxApiAccessToken={MAP_BOX_TOKEN}
    mapStyle={MAP_BOX_STYLE}
    onViewportChange={onViewportChange}
  />
);

export default MapBoxBlock;
