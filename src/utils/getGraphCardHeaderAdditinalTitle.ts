export type TGraphType = 'temperature' | 'humidity';

export const TEMP: TGraphType = 'temperature';
export const HUMIDITY: TGraphType = 'humidity';

export type TGtaphTypeHeader = 'Temperature' | 'Humidity' | '';

const TEMP_HEADER = 'Temperature';
const HUMIDITY_HEADER = 'Humidity';

export const getGraphCardHeaderAdditinalTitle = (type: TGraphType): TGtaphTypeHeader => {
  switch (type) {
    case TEMP:
      return TEMP_HEADER;

    case HUMIDITY:
      return HUMIDITY_HEADER;

    default:
      return '';
  }
};
