import { IWeatherCurrentPlace } from '../thunks/transformers/transformerWeatherCurrentPlace';

export const currentTemperature = 30;

export const mockCurrentPlaceWeather: IWeatherCurrentPlace = {
  placeName: 'City Name',
  country: 'Country Name',
  temperature: currentTemperature,
  cloudiness: 'cloudness',
  pressure: 200,
  humidity: 80,
  sunrise: '7:40 AM',
  sunset: '7:40 PM',
  coord: { lon: 23, lat: 23 },
  wind: {
    speed: 20,
    direction: 'North',
  },
};
