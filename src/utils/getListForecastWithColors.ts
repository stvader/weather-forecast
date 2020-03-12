import { ICityForeCast } from '../thunks/transformers/transformDataCityForecast';

export interface IForecastCityWithColor extends ICityForeCast {
  color: string;
}

const colorCollection: string[] = [
  '#a7414a',
  '#282726',
  '#6a8a82',
  '#a37c27',
  '#563838',
  '#192e5b',
  '#1d65a6',
  '#72a2c0',
  '#00743F',
  '#f2a104',
];

export const getListForecastWithColors = (i: number) => {
  if (i >= colorCollection.length) {
    return `#${Math.random()
      .toString(16)
      .substr(-6)}`;
  }

  return colorCollection[i];
};
