export const getMessageIncorrectCoords = (lon: string, lat: string): string => {
  if (!lon || !lat) {
    return 'Both coords must be entered';
  }

  if (!Number(lon) || !Number(lat)) {
    return 'Coords must be number';
  }

  return '';
};
