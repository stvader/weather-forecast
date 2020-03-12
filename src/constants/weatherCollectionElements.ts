export type TWeatherCollectionElement = 'WEATHER' | 'MAP' | 'GRAPH' | 'COMPARE';

interface ICardType {
  [key: string]: TWeatherCollectionElement;
}

export const CardType: ICardType = {
  WEATHER: 'WEATHER',
  MAP: 'MAP',
  GRAPH: 'GRAPH',
  COMPARE: 'COMPARE',
};

Object.freeze(CardType);
