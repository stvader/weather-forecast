const getList = () => localStorage.getItem('savedCities');
const parseJSON = (json: string) => JSON.parse(json);
const setList = (list: any[]) => {
  const json: string = JSON.stringify(list);
  localStorage.setItem('savedCities', json);
};

export const getCitiesListFromStorage = () => {
  const savedCitiesListJSON: string | null = getList();

  if (savedCitiesListJSON === null) {
    return [];
  }

  return parseJSON(savedCitiesListJSON);
};

export const setCityToStorageList = (idCity: number) => {
  const savedCitiesList = getList();
  let newCitiesList;

  if (savedCitiesList === null) {
    newCitiesList = [idCity];
  } else {
    const citiesList = parseJSON(savedCitiesList);
    const citiesListSet = new Set(citiesList);

    citiesListSet.add(idCity);
    newCitiesList = Array.from(citiesListSet);
  }

  setList(newCitiesList);
};

export const deleteCityFromStorageList = (idCity: number) => {
  const savedCitiesList = getList();

  if (savedCitiesList === null) {
    return;
  }

  const citiesList = parseJSON(savedCitiesList);
  const newCitiesList = citiesList.filter((id: number) => id !== idCity);

  setList(newCitiesList);
};
