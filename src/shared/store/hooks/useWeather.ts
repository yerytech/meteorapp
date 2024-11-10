import axios from "axios";
import { getWeatherData } from "../weatherSlice";
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
      const { location, current } = response.data;
      const info = {
        country: location.country,
        region: location.region,
        temp: current.temp_c,
        day: location.localtime,
        urlIcon: current.condition.icon,
        condition: current.condition.text,
      };

      dispatch(getWeatherData(info));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    // properties

    // methods
    startSavigData,
  };
};
