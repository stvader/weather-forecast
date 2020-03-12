import uuid from 'uuid/v4';

const REGEXP_DATE = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/;

export interface IForecastCity {
  date: number;
  dateText: string;
  temperature: number;
  humidity: number;
}

export const getForecastForCity = (forecastList: any[]): IForecastCity[] =>
  forecastList
    .filter(({ dt_txt: dtTxt }) => {
      // take hour from date
      const hour = dtTxt.match(REGEXP_DATE)[4];
      // take forecast only for 12 oclock for day
      return hour === '12';
    })
    .map(({ dt, dt_txt: dtTxt, main: { temp, humidity } }) => ({
      date: dt,
      dateText: dtTxt,
      temperature: temp,
      humidity,
      key: uuid(),
    }));
