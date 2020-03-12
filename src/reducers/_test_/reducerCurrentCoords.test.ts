import { reducerApp } from '../index';
import * as actions from '../../constants/actionsConstants';
import { initState } from '../initState';

const actionRequestCurrentCoords = {
  type: actions.GET_CURRENT_COORDS_REQUEST,
};

describe('Reducers: get current place coords', () => {
  it('should init state be correct', () => {
    const store = reducerApp(initState, { type: '' });

    expect(store.coordsCurrent).toEqual({
      loading: false,
      error: false,
    });
  });

  it('should request current coords with success', () => {
    const responseData = { lon: 23, lat: 23 };

    const actionSuccessCurrentCoords = {
      type: actions.GET_CURRENT_COORDS_SUCCESS,
      payload: responseData,
    };

    let store = reducerApp(initState, actionRequestCurrentCoords);

    expect(store.coordsCurrent).toEqual({
      loading: true,
      error: false,
    });

    store = reducerApp(store, actionSuccessCurrentCoords);

    expect(store.coordsCurrent).toEqual({
      loading: false,
      error: false,
      data: responseData,
    });
  });

  it('should request current coords with error', () => {
    const error = new Error('some error');
    const actionErrorCurrentCoords = {
      type: actions.GET_CURRENT_COORDS_ERROR,
      payload: error,
    };
    let store = reducerApp(initState, actionRequestCurrentCoords);

    expect(store.coordsCurrent).toEqual({
      loading: true,
      error: false,
    });

    store = reducerApp(store, actionErrorCurrentCoords);

    expect(store.coordsCurrent).toEqual({
      loading: false,
      error: true,
      data: error,
    });
  });
});
