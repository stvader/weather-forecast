import { TSavedCitiesList } from '../reducers/types';
import { fetchCityWeatherAsync } from '../thunks/fetchCityWeather';
import { getUrlThroughCityId } from './requestsUrls';
import transformDataWeatherCity from '../thunks/transformers/transformerWeatherCity';
import { getWeatherDataFromApi } from '../services/weatherApiService';

export const fetchSavedCitiesWeather = (savedCitiesList: TSavedCitiesList) => async (
  dispatch: any,
) => {
  if (!savedCitiesList || !savedCitiesList.length) {
    return;
  }

  // @ts-ignore
  dispatch(fetchCityWeatherAsync.request());

  Promise.all(savedCitiesList.map(id => getWeatherDataFromApi(getUrlThroughCityId(id))))
    .then(results =>
      results.forEach(data =>
        dispatch(fetchCityWeatherAsync.success(transformDataWeatherCity(data, true))),
      ),
    )
    .catch(error => dispatch(fetchCityWeatherAsync.failure(error)));
};
