import { createContext } from 'react';

export const WeatherCurrentContext = createContext<any>(null);

export const WeatherCurrentContextProvider = WeatherCurrentContext.Provider;
