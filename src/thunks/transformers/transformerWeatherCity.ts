import uuid from 'uuid/v4';

import getWindDirection from '../../utils/getWindDirection';
import { getPlaceName } from '../../utils/getPlaceName';
import { getDateForTimezone } from '../../utils/getDateForTimezone';
import { CardType, TWeatherCollectionElement } from '../../constants/weatherCollectionElements';
import { TIME_DATE_FORMAT_FOR_WEATHER_CARD } from '../../constants/timeFormatsConstants';
import { IForecastCity } from '../../utils/getForecastForCity';

interface ICoords {
  lon: number;
  lat: number;
}

interface IWind {
  speed: number;
  direction: string;
}

export interface ICardExtraRequestState {
  isMapLoading?: boolean;
  isForecastLoading?: boolean;
  isMapError?: boolean;
  isForecastError?: boolean;
}

export interface IWeatherCity {
  placeName: string;
  id: any;
  idCity: number;
  selected: boolean;
  temperature: number;
  cloudiness: string;
  pressure: number;
  humidity: number;
  coord: ICoords;
  wind: IWind;
  dateTime: string;
  type: TWeatherCollectionElement;
  forecast?: IForecastCity;
  cardExtraRequestState?: ICardExtraRequestState;
}

const transformDataWeatherCity = (
  {
    main: { temp, pressure, humidity },
    name,
    sys: { country },
    coord,
    weather: [{ description }],
    wind: { speed, deg },
    dt,
    timezone,
    id,
  }: any,
  selected = false,
): IWeatherCity => ({
  placeName: getPlaceName(name, country),
  id: uuid(),
  idCity: id,
  selected,
  temperature: temp,
  cloudiness: description,
  pressure,
  humidity,
  coord,
  wind: {
    speed,
    direction: getWindDirection(deg),
  },
  dateTime: getDateForTimezone(dt, timezone, TIME_DATE_FORMAT_FOR_WEATHER_CARD),
  type: CardType.WEATHER,
  cardExtraRequestState: {
    isMapLoading: false,
    isForecastLoading: false,
    isMapError: false,
    isForecastError: false,
  },
});

export default transformDataWeatherCity;
