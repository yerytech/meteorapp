import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WeatherProps {
  country: string;
  region: string;
  temp: string;
  day: string;
  urlIcon: string;
  condition: string;
  uv: string;
  humidity: string;
  windStatus: string;
  visibility: string;
  lastUpdated: string;
}

const weatherDate: WeatherProps = {
  country: "",
  region: "",
  temp: "",
  day: "",
  urlIcon: "",
  condition: "",
  uv: "",
  humidity: "",
  windStatus: "",
  visibility: "",
  lastUpdated: "",
};
const initialState = {
  errorMessage: "",
  data: weatherDate,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    getWeatherData: (state, { payload }: PayloadAction<WeatherProps>) => {
      state.data = payload;
      if (state.errorMessage !== "") {
        state.errorMessage = "";
      }
    },
    getError: (state, { payload }: PayloadAction<string>) => {
      state.errorMessage = payload;
    },
  },
});

export const { getWeatherData, getError } = weatherSlice.actions;
