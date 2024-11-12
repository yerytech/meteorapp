import { useAppSelector } from "../store/hooks/useFuntionStore";
import { CardHighlights } from "./CardHighlights";
import { ImgHumidity } from "./ImgHumidity";
import { ImgUv } from "./ImgUv";
import { ImgVisibility } from "./ImgVisibility";
import { ImgWind } from "./ImgWind";

export const WeatherInfo = ({ className }: { className: string }) => {
  const { data } = useAppSelector((state) => state.weather);
  return (
    <div className={`${className}ml-10 font-medium`}>
      <h1 className=" ml-2 m-4 text-2xl">Today's Highlights</h1>
      <div className="flex flex-wrap">
        <CardHighlights
          title={"UV index"}
          data={data.uv}
          tipe={""}
          children={<ImgUv />}
        />
        <CardHighlights
          title={"Humidity"}
          data={data.humidity}
          tipe={"%"}
          children={<ImgHumidity />}
        />
        <CardHighlights
          title={"Visibility"}
          data={data.visibility}
          tipe={"km"}
          children={<ImgVisibility />}
        />
        <CardHighlights
          title={"Wind Status"}
          data={data.windStatus}
          tipe={"km/h"}
          children={<ImgWind />}
        />
      </div>
    </div>
  );
};
