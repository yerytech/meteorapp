import { SideBar } from "../shared/components/SideBar";
import { WeatherInfo } from "../shared/components/WeatherInfo";
import { useAppSelector } from "../shared/store/hooks/useFuntionStore";

export const HomePage = () => {
  const { data, errorMessage } = useAppSelector((state) => state.weather);

  return (
    <div className="h-screen w-full bg-cieloClaro bg-cover bg-no-repeat bg-center bg-fixed flex flex-row">
      <div className="backdrop-blur-none h-screen bg-background/40 w-full flex flex-row">
        <SideBar
          errorMessage={errorMessage}
          country={data.country}
          region={data.region}
          temp={data.temp.toString()}
          urlIcon={data.urlIcon}
          condition={data.condition}
          lastUpdated={data.lastUpdated}
        />
        <WeatherInfo className=" hidden sm:block pt-20 " />
      </div>
    </div>
  );
};
