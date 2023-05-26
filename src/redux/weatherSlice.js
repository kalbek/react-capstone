import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  weather: [],
  error: "",
};

export const getWeathers = createAsyncThunk("weather", async () => {
  console.log("dispatchexd");
  const response = await axios(
    "http://api.openweathermap.org/data/2.5/air_pollution?lat=7&lon=7&appid=25df0065e0f7bc95dbc36a884ef43ee6"
  );
  console.log("response: ", response.data);
  return response.data;
});

const weatherSlice = createSlice({
  name: "weathers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWeathers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getWeathers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.weather = action.payload;
    });
    builder.addCase(getWeathers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default weatherSlice.reducer;
