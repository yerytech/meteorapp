import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WeatherProps {
  country: string;
  region: string;
  temp: string;
  day: string;
  urlIcon: string;
  condition: string;
}

const weatherDate: WeatherProps = {
  country: "",
  region: "",
  temp: "",
  day: "",
  urlIcon: "",
  condition: "",
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
    },
  },
});

export const { getWeatherData } = weatherSlice.actions;
