import { useAppSelector } from "../store/hooks/useFuntionStore";
import { CustomCard } from "./CustomCard";

import { ImgHumidity } from "./ImgHumidity";
import { ImgUv } from "./ImgUv";
import { ImgVisibility } from "./ImgVisibility";
import { ImgWind } from "./ImgWind";

export const TodayHighlights = () => {
  const { data } = useAppSelector((state) => state.weather);
  const style = "sm:w-[150px] sm:h-[100px]  md:w-[250px] md:h-[130px]";
  return (
    <>
      <h1 className=" ml-2 m-4 sm:text-medium  md:text-2xl">
        Today's Highlights
      </h1>
      <div className="flex flex-wrap">
        <CustomCard
          className={style}
          title={"UV index"}
          data={data.uv}
          tipe={""}
          children={<ImgUv />}
        />
        <CustomCard
          className={style}
          title={"Humidity"}
          data={data.humidity}
          tipe={"%"}
          children={<ImgHumidity />}
        />
        <CustomCard
          className={style}
          title={"Visibility"}
          data={data.visibility}
          tipe={"km"}
          children={<ImgVisibility />}
        />
        <CustomCard
          className={style}
          title={"Wind Status"}
          data={data.windStatus}
          tipe={"km/h"}
          children={<ImgWind />}
        />
      </div>
    </>
  );
};