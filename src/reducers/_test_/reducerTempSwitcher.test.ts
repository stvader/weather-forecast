import { reducerApp } from '../index';
import * as actions from '../../constants/actionsConstants';
import { CELSIUS, FAHRENHEIT } from '../../constants/temperatureUnitConstants';
import { initState } from '../initState';

const actionSwitchTemp = {
  type: actions.SWITCH_TEMPERATURE_UNIT,
};

describe('Reducers: temperature switcher reducer', () => {
  it('should return C switch init', () => {
    const store = reducerApp(undefined, { type: '' });

    expect(store.temperatureSwitcher).toEqual(CELSIUS);
  });

  it('should switch temp type', () => {
    let store = reducerApp(initState, actionSwitchTemp);

    expect(store.temperatureSwitcher).toEqual(FAHRENHEIT);

    store = reducerApp(store, actionSwitchTemp);

    expect(store.temperatureSwitcher).toEqual(CELSIUS);
  });
});
