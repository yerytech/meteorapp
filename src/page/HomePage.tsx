import { SideBar } from "../shared/components/SideBar";
import { WeatherInfo } from "../shared/components/WeatherInfo";
import { useAppSelector } from "../shared/store/hooks/useFuntionStore";

export const HomePage = () => {
  const { data, errorMessage } = useAppSelector((state) => state.weather);

  return (
    <div className="h-screen w-full  bg-gray-200 flex flex-row">
      <SideBar
        errorMessage={errorMessage}
        country={data.country}
        region={data.region}
        temp={data.temp.toString()}
        urlIcon={data.urlIcon}
        condition={data.condition}
        lastUpdated={data.lastUpdated}
      />
      <WeatherInfo className=" hidden sm:block  " />
    </div>
  );
};
