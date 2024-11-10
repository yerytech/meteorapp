import { createSlice } from "@reduxjs/toolkit";

// interface WeatherProps{
//  countri:string
// }

const initialState = {
  countri: "",
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    increment: (state) => {
      console.log(state);
    },
  },
});

export const { increment } = weatherSlice.actions;
