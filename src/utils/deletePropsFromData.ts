import { IWeatherCity } from '../thunks/transformers/transformerWeatherCity';

export const deletePropsFromData = (data: IWeatherCity): IWeatherCity => {
  const weatherCardData = { ...data };
  delete weatherCardData.cardExtraRequestState;
  delete weatherCardData.forecast;
  return weatherCardData;
};

// delete extra params, they aren't neccessary for rendering
// but may be reason for re-rendering
