// import { getWeather } from "../services/apiConfig";
import { SideBar } from "../shared/components/SideBar";
import { useAppSelector } from "../shared/store/hooks/useFuntionStore";
export const AppRouter = () => {
  const { data } = useAppSelector((state) => state.weather);

  return (
    <div className="h-screen w-full bg-teal-100">
      <SideBar
        country={data.country}
        region={data.region}
        temp={data.temp.toString()}
        day={data.day}
        urlIcon={data.urlIcon}
        condition={data.condition}
      />
    </div>
  );
};
