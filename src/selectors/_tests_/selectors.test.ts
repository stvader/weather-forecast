import { selectCityWeatherSection, selectTempCurrent } from '../index';
import { getMockWeatherCollection } from '../../mocks/mockWeatherCollection';
import { mockCurrentPlaceWeather, currentTemperature } from '../../mocks/mockWeatherCurrentPlace';
import { initState } from '../../reducers/initState';
import { CELSIUS, FAHRENHEIT } from '../../constants/temperatureUnitConstants';

describe('Selectors: selector for city weather section', () => {
  it('should return empty for init state of app', () => {
    const mockSavedList: number[] = [];
    const mockWeatherCollection = getMockWeatherCollection([]);

    const state = {
      ...initState,
      savedCitiesList: mockSavedList,
      cityWeatherCollection: mockWeatherCollection,
    };

    const mockData = {
      savedCitiesList: [],
      cityWeatherCollection: [],
    };

    expect(selectCityWeatherSection(state)).toEqual(mockData);
  });

  it('should return right data', () => {
    const mockSavedList = [23, 24, 25];
    const mockWeatherCollection = getMockWeatherCollection([...mockSavedList, 30]);

    const mockData = {
      savedCitiesList: mockSavedList,
      cityWeatherCollection: mockWeatherCollection,
    };

    const state = {
      ...initState,
      savedCitiesList: mockSavedList,
      cityWeatherCollection: mockWeatherCollection,
    };

    expect(selectCityWeatherSection(state)).toEqual(mockData);
  });
});

describe('Selectors: selector for temperature', () => {
  it('shoud return correct temperature in celsius', () => {
    const mockTemperatureSwitcher = CELSIUS;

    const state = {
      ...initState,
      weatherCurrentCity: {
        ...initState.weatherCurrentCity,
        data: mockCurrentPlaceWeather,
      },
      temperatureSwitcher: mockTemperatureSwitcher,
    };

    const mockData = {
      temperatureSwitcher: mockTemperatureSwitcher,
      temperature: currentTemperature,
    };

    expect(selectTempCurrent(state)).toEqual(mockData);
  });

  it('shoud return correct temperature in fahrenheit', () => {
    const mockTemperatureSwitcher = FAHRENHEIT;

    const state = {
      ...initState,
      weatherCurrentCity: {
        ...initState.weatherCurrentCity,
        data: mockCurrentPlaceWeather,
      },
      temperatureSwitcher: mockTemperatureSwitcher,
    };

    const mockData = {
      temperatureSwitcher: mockTemperatureSwitcher,
      temperature: currentTemperature,
    };

    expect(selectTempCurrent(state)).toEqual(mockData);
  });
});
