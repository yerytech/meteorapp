import axios, { AxiosError } from "axios";
import { getError, getWeatherData, getWeatherDataDays } from "../weatherSlice";
import { useAppDispatch } from "./useFuntionStore";

const baseUrl = import.meta.env.VITE_BASEURL;
const apiKey = import.meta.env.VITE_API_KEY;
type ForecastDay = {
  day: string;
  urlIcon: string;
  temp: number;
};

type ForecastDayRaw = {
  date: string;
  day: {
    condition: {
      icon: string;
    };
    maxtemp_c: number;
  };
};

export const useWeather = () => {
  const dispatch = useAppDispatch();

  const startSavigData = async (query: string) => {
    try {
      const response = await axios.get(baseUrl, {
        params: {
          key: apiKey,
          q: `${query}`,
          days: 7,
        },
      });

      const { location, current, forecast } = response.data;

      const curerentInfo = {
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

      const dataWeekly: ForecastDay[] = forecast.forecastday.map(
        (day: ForecastDayRaw) => ({
          day: day.date,
          urlIcon: day.day.condition.icon,
          temp: day.day.maxtemp_c,
        })
      );

      dispatch(getWeatherDataDays(dataWeekly));
      dispatch(getWeatherData(curerentInfo));
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
