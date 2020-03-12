export const getPlaceName = (cityName: string, countryName: string) => {
  if (!cityName && !countryName) {
    return 'Unidentified place';
  }

  if (!cityName) {
    return `Unidentified localy, ${countryName}`;
  }

  if (!countryName) {
    return `${cityName}, unidentified place`;
  }

  return `${cityName}, ${countryName}`;
};
