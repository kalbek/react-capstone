import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import weatherReducer, {
  getSampleData,
  getWeathers,
  clearSampleAqi,
} from '../redux/weatherSlice';

// Create a mock store
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('weatherSlice', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      sampleAQIData: [],
      weather: {},
      coords: {},
      isLoading: false,
      isSuccess: false,
      isError: false,
      error: '',
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should clear sampleAQIData correctly', () => {
    const action = clearSampleAqi();
    store.dispatch(action);
    const newState = store.getState();

    expect(newState.sampleAQIData).toEqual([]);
  });

  it('should handle getWeathers.pending correctly', () => {
    const action = getWeathers.pending();
    const newState = weatherReducer(undefined, action);

    expect(newState.isLoading).toBe(true);
    expect(newState.isSuccess).toBe(false);
    expect(newState.isError).toBe(false);
  });

  it('should handle getWeathers.fulfilled correctly', () => {
    const expectedPayload = {
      coord: { lat: 123, lon: 456 } /* other response data */,
    };
    const action = getWeathers.fulfilled(expectedPayload);
    const newState = weatherReducer(undefined, action);

    expect(newState.isLoading).toBe(false);
    expect(newState.isSuccess).toBe(true);
    expect(newState.isError).toBe(false);
    expect(newState.weather).toEqual(expectedPayload);
    expect(newState.coords).toEqual(expectedPayload.coord);
  });

  it('should handle getWeathers.rejected correctly', () => {
    const expectedPayload = 'Error message';
    const action = getWeathers.rejected(expectedPayload);
    const newState = weatherReducer(undefined, action);

    expect(newState.isSuccess).toBe(false);
    expect(newState.isLoading).toBe(false);
    expect(newState.isError).toBe(true);
  });

  it('should handle getSampleData.fulfilled correctly', () => {
    const existingData = [{ id: 1 /* other properties */ }];
    const action = getSampleData.fulfilled({ id: 2 /* other properties */ });
    const initialState = {
      sampleAQIData: existingData,
      /* other initial state properties */
    };
    const newState = weatherReducer(initialState, action);

    expect(newState.sampleAQIData).toHaveLength(2);
    expect(newState.sampleAQIData[1]).toEqual({ id: 2 /* other properties */ });
  });
});
