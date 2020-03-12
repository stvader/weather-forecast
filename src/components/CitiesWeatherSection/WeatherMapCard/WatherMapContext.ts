import { createContext } from 'react';

export const WeatherMapContext = createContext<any>(null);
export const WeatherMapContextProvider = WeatherMapContext.Provider;
