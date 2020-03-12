import { TCityWeatherCollectionItem } from '../reducers/types';

export const getElementForLoadingView = (
  idLoading: number,
  collection: TCityWeatherCollectionItem[],
) => {
  const indexCardLoading = collection.findIndex(
    ({ id }: TCityWeatherCollectionItem) => id === idLoading,
  );
  const elemCardLoading: TCityWeatherCollectionItem = collection[indexCardLoading];

  return {
    indexCardLoading,
    elemCardLoading,
  };
};
