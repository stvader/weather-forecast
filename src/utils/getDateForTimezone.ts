import moment from 'moment';

export const getDateForTimezone = (timeUTC: number, timeZone: number, format: string) =>
  moment
    .unix(timeUTC)
    .utc()
    .add(timeZone, 's')
    .format(format);

export const getTimeForCurrentTimezone = (timeUTC: number, format: string) =>
  moment
    .unix(timeUTC)
    .local()
    .format(format);
