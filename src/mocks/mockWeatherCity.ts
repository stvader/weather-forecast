import { IWeatherCity } from '../thunks/transformers/transformerWeatherCity';
import { CardType } from '../constants/weatherCollectionElements';

export const getMockCityWeather = (id: any): IWeatherCity => ({
  placeName: `City, Country`,
  id,
  idCity: 1234,
  selected: false,
  temperature: 30,
  cloudiness: 'clouds',
  pressure: 100,
  humidity: 100,
  coord: { lon: 23, lat: 23 },
  wind: {
    speed: 30,
    direction: 'North-West',
  },
  dateTime: '2020-10-31 10:00',
  type: CardType.WEATHER,
  cardExtraRequestState: {
    isMapLoading: false,
    isForecastLoading: false,
    isMapError: false,
    isForecastError: false,
  },
});
