import * as actionCreators from '../index';
import { getMockWeatherCollection } from '../../mocks/mockWeatherCollection';

describe('synchoric actions', () => {
  it('should create an action to switch temperature units', () => {
    const expectedAction = {
      type: 'SWITCH_TEMPERATURE_UNIT',
    };

    expect(actionCreators.switchTemperatureUnit()).toEqual(expectedAction);
  });

  it('should create an action to delete card', () => {
    const anyId = 23;
    const expectedAction = {
      type: 'DELETE_CITY_WEATHER_CARD',
      payload: anyId,
    };

    expect(actionCreators.deleteCityWeatherCard(anyId)).toEqual(expectedAction);
  });

  it('should create an action to change sequence cities weather', () => {
    const sequence = getMockWeatherCollection([1, 2]);
    const expectedAction = {
      type: 'CHANGE_SEQUENCE_WEATHER_LIST',
      payload: sequence,
    };

    expect(actionCreators.changeSequenceCitiesWeather(sequence)).toEqual(expectedAction);
  });
});
