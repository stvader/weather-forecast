import { createContext } from 'react';

export const ForecastWeatherCityCardContext = createContext<any>(null);

export const ForecastWeatherCityCardContextProvider = ForecastWeatherCityCardContext.Provider;
