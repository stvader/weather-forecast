import uuid from 'uuid/v4';

import * as actions from '../constants/actionsConstants';
import { IAppState, IActions, TCityWeatherCollectionItem } from './types';
import { switchTemperatureUnitFunc } from '../utils/switchTemperatureUnitFunc';
import { initState } from './initState';
import { CardType } from '../constants/weatherCollectionElements';
import { getElementForLoadingView } from '../utils/getElemForLoadingView';

export const reducerApp = (state: IAppState = initState, action: IActions) => {
  switch (action.type) {
    case actions.SWITCH_TEMPERATURE_UNIT:
      return {
        ...state,
        temperatureSwitcher: switchTemperatureUnitFunc(state.temperatureSwitcher),
      };

    case actions.GET_CURRENT_COORDS_REQUEST:
      return {
        ...state,
        coordsCurrent: {
          ...state.coordsCurrent,
          loading: true,
          error: false,
        },
      };
    case actions.GET_CURRENT_COORDS_SUCCESS:
      return {
        ...state,
        coordsCurrent: {
          ...state.coordsCurrent,
          loading: false,
          error: false,
          data: action.payload,
        },
      };
    case actions.GET_CURRENT_COORDS_ERROR:
      return {
        ...state,
        coordsCurrent: {
          ...state.coordsCurrent,
          loading: false,
          error: true,
          data: action.payload,
        },
      };

    case actions.FETCH_CURRENT_WEATHER_REQUEST:
      return {
        ...state,
        weatherCurrentCity: {
          loading: true,
          error: false,
        },
      };
    case actions.FETCH_CURRENT_WEATHER_SUCCESS:
      return {
        ...state,
        weatherCurrentCity: {
          loading: false,
          error: false,
          data: action.payload,
        },
      };
    case actions.FETCH_CURRENT_WEATHER_ERROR:
      return {
        ...state,
        weatherCurrentCity: {
          loading: false,
          error: true,
          data: action.payload,
        },
      };

    case actions.FETCH_CITY_WEATHER_REQUEST:
      return {
        ...state,
        cityWeatherReqState: {
          loading: true,
          error: false,
        },
      };
    case actions.FETCH_CITY_WEATHER_SUCCESS:
      return {
        ...state,
        cityWeatherCollection: [
          ...state.cityWeatherCollection,
          {
            ...action.payload,
            type: CardType.WEATHER,
          },
        ],
        cityWeatherReqState: {
          loading: false,
          error: false,
        },
      };
    case actions.FETCH_CITY_WEATHER_ERROR:
      return {
        ...state,
        cityWeatherReqState: {
          loading: false,
          error: true,
        },
      };

    case actions.DELETE_CITY_WEATHER_CARD:
      return {
        ...state,
        cityWeatherCollection: state.cityWeatherCollection.filter(
          ({ id }) => id !== action.payload,
        ),
      };

    case actions.CHANGE_SEQUENCE_WEATHER_LIST:
      return {
        ...state,
        cityWeatherCollection: action.payload,
      };

    case actions.FETCH_CITY_WEATHER_MAP_REQUEST: {
      const { indexCardLoading, elemCardLoading } = getElementForLoadingView(
        action.payload,
        state.cityWeatherCollection,
      );

      const newcityWeatherCollection = [...state.cityWeatherCollection];
      newcityWeatherCollection[indexCardLoading] = {
        ...elemCardLoading,
        cardExtraRequestState: {
          // @ts-ignore
          ...elemCardLoading.cardExtraRequestState,
          isMapLoading: true,
          isMapError: false,
        },
      };

      return {
        ...state,
        cityWeatherCollection: newcityWeatherCollection,
      };
    }
    case actions.FETCH_CITY_WEATHER_MAP_SUCCESS: {
      const { indexCardLoading, elemCardLoading } = getElementForLoadingView(
        action.payload.cityBlockId,
        state.cityWeatherCollection,
      );

      const newcityWeatherCollection = [...state.cityWeatherCollection];
      newcityWeatherCollection[indexCardLoading] = {
        ...elemCardLoading,
        cardExtraRequestState: {
          // @ts-ignore
          ...elemCardLoading.cardExtraRequestState,
          isMapLoading: false,
          isMapError: false,
        },
      };

      return {
        ...state,
        cityWeatherCollection: [
          ...newcityWeatherCollection,
          {
            id: action.payload.id,
            data: action.payload.img,
            coord: action.payload.coord,
            type: CardType.MAP,
          },
        ],
      };
    }
    case actions.FETCH_CITY_WEATHER_MAP_ERROR: {
      const { indexCardLoading, elemCardLoading } = getElementForLoadingView(
        action.payload.cityBlockId,
        state.cityWeatherCollection,
      );

      const newcityWeatherCollection = [...state.cityWeatherCollection];
      newcityWeatherCollection[indexCardLoading] = {
        ...elemCardLoading,
        cardExtraRequestState: {
          // @ts-ignore
          ...elemCardLoading.cardExtraRequestState,
          isMapLoading: false,
          isMapError: true,
        },
      };

      return {
        ...state,
        cityWeatherCollection: newcityWeatherCollection,
      };
    }

    case actions.FETCH_CITY_WEATHER_FORECAST_REQUEST: {
      const { indexCardLoading, elemCardLoading } = getElementForLoadingView(
        action.payload,
        state.cityWeatherCollection,
      );

      const newcityWeatherCollection = [...state.cityWeatherCollection];
      newcityWeatherCollection[indexCardLoading] = {
        ...elemCardLoading,
        cardExtraRequestState: {
          // @ts-ignore
          ...elemCardLoading.cardExtraRequestState,
          isForecastLoading: true,
          isForecastError: false,
        },
      };

      return {
        ...state,
        cityWeatherCollection: newcityWeatherCollection,
      };
    }
    case actions.FETCH_CITY_WEATHER_FORECAST_SUCCESS: {
      const { indexCardLoading, elemCardLoading } = getElementForLoadingView(
        action.payload.cityBlockId,
        state.cityWeatherCollection,
      );

      const newcityWeatherCollection = [...state.cityWeatherCollection];
      newcityWeatherCollection[indexCardLoading] = {
        ...elemCardLoading,
        forecast: action.payload,
        cardExtraRequestState: {
          // @ts-ignore
          ...elemCardLoading.cardExtraRequestState,
          isForecastLoading: false,
          isForecastError: false,
        },
      };

      return {
        ...state,
        cityWeatherCollection: [
          ...newcityWeatherCollection,
          {
            ...action.payload,
            type: CardType.GRAPH,
          },
        ],
      };
    }
    case actions.FETCH_CITY_WEATHER_FORECAST_ERROR: {
      const { indexCardLoading, elemCardLoading } = getElementForLoadingView(
        action.payload.cityBlockId,
        state.cityWeatherCollection,
      );

      const newcityWeatherCollection = [...state.cityWeatherCollection];
      newcityWeatherCollection[indexCardLoading] = {
        ...elemCardLoading,
        cardExtraRequestState: {
          // @ts-ignore
          ...elemCardLoading.cardExtraRequestState,
          isForecastLoading: false,
          isForecastError: true,
        },
      };

      return {
        ...state,
        cityWeatherCollection: newcityWeatherCollection,
      };
    }

    case actions.FETCH_WEATHER_FORECAST_COMPARE_REQUEST: {
      const { indexCardLoading, elemCardLoading } = getElementForLoadingView(
        action.payload,
        state.cityWeatherCollection,
      );

      const newCityWeatherCollection = [...state.cityWeatherCollection];
      newCityWeatherCollection[indexCardLoading] = {
        ...elemCardLoading,
        cardExtraRequestState: {
          // @ts-ignore
          ...elemCardLoading.cardExtraRequestState,
          isForecastLoading: true,
          isForecastError: false,
        },
      };

      return {
        ...state,
        cityWeatherCollection: newCityWeatherCollection,
      };
    }
    case actions.FETCH_WEATHER_FORECAST_COMPARE_SUCCESS: {
      let compareForecast: any;
      let compareForecastIndex: number = state.cityWeatherCollection.findIndex(
        ({ type }: TCityWeatherCollectionItem) => type === CardType.COMPARE,
      );

      const { indexCardLoading, elemCardLoading } = getElementForLoadingView(
        action.payload.cityBlockId,
        state.cityWeatherCollection,
      );

      if (compareForecastIndex === -1) {
        compareForecastIndex = state.cityWeatherCollection.length;
        compareForecast = { id: 0, type: CardType.COMPARE, list: [action.payload] };
      } else {
        compareForecast = state.cityWeatherCollection[compareForecastIndex];
        compareForecast = {
          ...compareForecast,
          list: [...compareForecast.list, action.payload],
        };
      }

      const newCityWeatherCollection = [...state.cityWeatherCollection];

      newCityWeatherCollection[indexCardLoading] = {
        ...elemCardLoading,
        cardExtraRequestState: {
          // @ts-ignore
          ...elemCardLoading.cardExtraRequestState,
          isForecastLoading: false,
          isForecastError: false,
        },
      };

      newCityWeatherCollection[compareForecastIndex] = compareForecast;

      return {
        ...state,
        cityWeatherCollection: newCityWeatherCollection,
      };
    }
    case actions.FETCH_WEATHER_FORECAST_COMPARE_ERROR: {
      const { indexCardLoading, elemCardLoading } = getElementForLoadingView(
        action.payload.cityBlockId,
        state.cityWeatherCollection,
      );

      const newcityWeatherCollection = [...state.cityWeatherCollection];
      newcityWeatherCollection[indexCardLoading] = {
        ...elemCardLoading,
        cardExtraRequestState: {
          // @ts-ignore
          ...elemCardLoading.cardExtraRequestState,
          isForecastLoading: false,
          isForecastError: true,
        },
      };

      return {
        ...state,
        cityWeatherCollection: newcityWeatherCollection,
      };
    }

    case actions.ADD_GRAPH_FORECAST_TEMP_MEMO:
      return {
        ...state,
        cityWeatherCollection: [
          ...state.cityWeatherCollection,
          {
            ...action.payload,
            type: CardType.GRAPH,
            id: uuid(),
          },
        ],
      };

    default:
      return state;
  }
};
