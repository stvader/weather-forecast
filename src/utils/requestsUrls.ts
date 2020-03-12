import { KEY_API, LINK_API } from '../config';
import { ICoords } from '../thunks/transformers/transformerWeatherCurrentPlace';
import { MAP_ZOOM } from '../constants/mapConstants';

export const getUrlThroughCoords = ({ lat, lon }: ICoords) =>
  `${LINK_API}?lat=${lat.toFixed(2)}&lon=${lon.toFixed(2)}&APPID=${KEY_API}`;

export const getUrlThroughCityName = (cityName: string) =>
  `${LINK_API}?q=${cityName}&APPID=${KEY_API}`;

export const getUrlThroughCityId = (cityId: number) => `${LINK_API}?id=${cityId}&APPID=${KEY_API}`;

export const getUrlMap = (
  lon: number,
  lat: number,
  op: string = 'temp_new',
  zoom: number = MAP_ZOOM,
) =>
  `https://tile.openweathermap.org/map/${op}/${zoom}/${lon}/${lat}.png
  ?cities=true&appid=${KEY_API}`;

export const getUrlCityForecast = ({ lon, lat }: ICoords) =>
  `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=40&APPID=${KEY_API}`;
