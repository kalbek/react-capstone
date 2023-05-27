import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { current } from "@reduxjs/toolkit";

const initialState = {
  weather: [],
  error: "",
  coords: {},
  isLoading: false,
  isSuccess: false,
};

export const getWeathers = createAsyncThunk("weather", async (coord) => {
  console.log("dispatchexd: ", coord);
  console.log("eyo");

  const response = await axios(
    `http://api.openweathermap.org/data/2.5/air_pollution?lat=${coord.lat}&lon=${coord.lon}&appid=25df0065e0f7bc95dbc36a884ef43ee6`
  );
  console.log("response: ", response.data);
  return response.data;
});

const weatherSlice = createSlice({
  name: "weathers",
  initialState,
  reducers: {
    setCoords: (state, action) => {
      console.log("comming coords: ", action.payload);
      console.log("state: ", current(state));
      return { ...state, coords: action.payload };
    },
    setWeather: (state, action) => {
      console.log("comming weather: ", action.payload);
      console.log("state: ", current(state));
      return { ...state, weather: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getWeathers.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
    });
    builder.addCase(getWeathers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.weather = action.payload;
      state.coords = action.payload.coord;
      console.log("yessssssssssssssss");
    });
    builder.addCase(getWeathers.rejected, (state, action) => {
      state.isSuccess = false;
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});
export const { setCoords, setWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
