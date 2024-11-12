import axios, { AxiosError } from "axios";
import { getError, getWeatherData } from "../weatherSlice";
import { useAppDispatch } from "./useFuntionStore";

const baseUrl = import.meta.env.VITE_BASEURL;
const apiKey = import.meta.env.VITE_API_KEY;

export const useWeather = () => {
  const dispatch = useAppDispatch();

  const startSavigData = async (query: string) => {
    try {
      const response = await axios.get(baseUrl, {
        params: {
          key: apiKey,
          q: query,
        },
      });
      // console.log(response);

      const { location, current } = response.data;
      const info = {
        country: location.country,
        region: location.region,
        temp: current.temp_c,
        day: location.localtime,
        urlIcon: current.condition.icon,
        condition: current.condition.text,
        uv: current.uv,
        humidity: current.humidity,
        windStatus: current.wind_kph,
        visibility: current.vis_km,
        lastUpdated: current.last_updated,
      };

      dispatch(getWeatherData(info));
    } catch (error) {
      if (error instanceof AxiosError) {
        const message = error.response?.data.error.message;
        dispatch(getError(message));
      } else {
        dispatch(getError("Error desconocido"));
      }
    }
    return;
  };

  return {
    // properties

    // methods
    startSavigData,
  };
};
