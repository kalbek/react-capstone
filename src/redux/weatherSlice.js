import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  sampleAQIData: [],
  weather: {},
  coords: {},
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: '',
};

export const getSampleData = createAsyncThunk('getSample', async (coord) => {
  const response = await axios(
    `http://api.openweathermap.org/data/2.5/air_pollution?lat=${coord.x}&lon=${coord.y}&appid=25df0065e0f7bc95dbc36a884ef43ee6`,
  );
  return response.data;
});

export const getWeathers = createAsyncThunk('weather', async (coord) => {
  const response = await axios(
    `https://api.openweathermap.org/data/2.5/air_pollution?lat=${coord.lat}&lon=${coord.lon}&appid=25df0065e0f7bc95dbc36a884ef43ee6`,
  );
  return response.data;
});

const weatherSlice = createSlice({
  name: 'weathers',
  initialState,
  reducers: {
    setCoords: (state, action) => ({ ...state, coords: action.payload }),
    clearSampleAqi: (state) => ({ ...state, sampleAQIData: [] }),
  },
  extraReducers: (builder) => {
    builder.addCase(getWeathers.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    });
    builder.addCase(getWeathers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.weather = action.payload;
      state.coords = action.payload.coord;
    });
    builder.addCase(getWeathers.rejected, (state, action) => {
      state.isSuccess = false;
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
    builder.addCase(getSampleData.fulfilled, (state, action) => {
      if (!state.sampleAQIData.includes(action.payload)) state.sampleAQIData.push(action.payload);
      const newData = state.sampleAQIData.map((state, index) => ({
        ...state,
        id: index + 1,
      }));
      state.sampleAQIData = newData;
    });
  },
});
export const { setCoords, clearSampleAqi } = weatherSlice.actions;
export default weatherSlice.reducer;
