import { getTimeForCurrentTimezone } from '../../utils/getDateForTimezone';
import getWindDirection from '../../utils/getWindDirection';
import { TIME_FORMAT_FOR_CURRENT_WEATHER } from '../../constants/timeFormatsConstants';

export interface ICoords {
  lon: number;
  lat: number;
}

interface IWind {
  speed: number;
  direction: string;
}

export interface IWeatherCurrentPlace {
  placeName: string;
  country: string;
  temperature: number;
  cloudiness: string;
  pressure: number;
  humidity: number;
  sunrise: string;
  sunset: string;
  coord: ICoords;
  wind: IWind;
}

const transformDataWeatherCurrentPlace = ({
  main: { temp, pressure, humidity },
  name,
  sys: { country, sunrise, sunset },
  coord,
  weather: [{ description }],
  wind: { speed, deg },
}: any): IWeatherCurrentPlace => ({
  placeName: name,
  country,
  temperature: temp,
  cloudiness: description,
  pressure,
  humidity,
  sunrise: getTimeForCurrentTimezone(sunrise, TIME_FORMAT_FOR_CURRENT_WEATHER),
  sunset: getTimeForCurrentTimezone(sunset, TIME_FORMAT_FOR_CURRENT_WEATHER),
  coord,
  wind: {
    speed,
    direction: getWindDirection(deg),
  },
});

export default transformDataWeatherCurrentPlace;
