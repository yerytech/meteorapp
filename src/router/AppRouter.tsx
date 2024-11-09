import { getWeather } from "../services/apiConfig";
export const AppRouter = () => {
  getWeather("London");
  return <div>AppRouter</div>;
};
