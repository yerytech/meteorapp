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


const weatherData: WeatherProps = {
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
interface WeatherWeeklyProps {
  day: string;
  urlIcon: string;
  temp: number;
}

const weatherweeklyData: WeatherWeeklyProps[] = [
  {
    day: "",
    urlIcon: "",
    temp: 0,
  },
];

const initialState = {
  errorMessage: "",
  data: weatherData,
  weeklyData: weatherweeklyData,
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
    getWeatherDataDays: (
      state,
      { payload }: PayloadAction<WeatherWeeklyProps[]>
    ) => {
      state.weeklyData = payload;
    },
  },
});

export const { getWeatherData, getError, getWeatherDataDays } =
  weatherSlice.actions;
