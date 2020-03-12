import { createContext } from 'react';

export const WeatherCityContext = createContext<any>(null);

export const WeatherCityContextProvider = WeatherCityContext.Provider;
