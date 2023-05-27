import axios from 'axios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { getWeathers } from '../redux/weatherSlice';

jest.mock('axios');

const mockStore = configureStore([thunk]);

describe('getWeathers', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch weather data and update the store correctly on successful response', async () => {
    const mockResponse = {
      data: {
        coord: {
          lat: 12.345,
          lon: 67.89,
        },
        list: [
          {
            main: {
              aqi: 1,
            },
            dt: 1622131234,
            components: {
              co: 123.45,
              no: 67.89,
              no2: 12.34,
              o3: 56.78,
              so2: 90.12,
              pm2_5: 34.56,
              pm10: 78.9,
              nh3: 0.12,
            },
          },
        ],
      },
    };

    axios.mockResolvedValueOnce(mockResponse);

    const initialState = {
      weathers: {
        weather: [],
        coords: {},
        isLoading: false,
        isSuccess: false,
        isError: false,
        error: '',
      },
    };

    const store = mockStore(initialState);

    await store.dispatch(getWeathers({ lat: 12.345, lon: 67.89 }));

    const actions = store.getActions();
    expect(actions[0].type).toEqual(getWeathers.pending.type);
    expect(actions[1].type).toEqual(getWeathers.fulfilled.type);
    expect(actions[1].payload).toEqual(mockResponse.data);

    const { weathers } = store.getState();
    expect(weathers.isLoading).toBe(false);
    expect(weathers.isError).toBe(false);
  });

  it('should handle API error and update the store correctly on rejected response', async () => {
    const mockError = undefined;

    axios.mockRejectedValueOnce(mockError);

    const initialState = {
      weathers: {
        weather: [],
        coords: {},
        isLoading: false,
        isSuccess: false,
        isError: false,
        error: '',
      },
    };

    const store = mockStore(initialState);

    await store.dispatch(getWeathers({ lat: 12.345, lon: 67.89 }));

    const actions = store.getActions();
    expect(actions[0].type).toEqual(getWeathers.pending.type);
    expect(actions[1].type).toEqual(getWeathers.rejected.type);
    expect(actions[1].payload).toEqual(mockError);

    const { weathers } = store.getState();
    expect(weathers.isLoading).toBe(false);
    expect(weathers.isSuccess).toBe(false);
  });
});
