import { Image, Input } from "@nextui-org/react";
import { FiDelete } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import { useWeather } from "../store/hooks/useWeather";
import { useEffect, useState } from "react";
interface DaylyWeatherProp {
  country: string;
  region: string;
  temp: string;
  day: string;
  urlIcon: string;
  condition: string;
  errorMessage: string;
  lastUpdated: string;
}
export const SideBar = ({
  country,
  region,
  temp,
  day,
  urlIcon,
  condition,
  errorMessage,
  lastUpdated,
}: DaylyWeatherProp) => {
  const { startSavigData } = useWeather();

  const [getCountry, setCountry] = useState("Miami");
  const onHandleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  useEffect(() => {
    startSavigData(getCountry);
  }, [getCountry, startSavigData]);
  return (
    <div className=" flex flex-col max-w-xs  bg-slate-300  items-center justify-items-center rounded-2xl  content-center ">
      <form onSubmit={onHandleSubmit}>
        <Input
          type="text"
          onChange={({ target }) => {
            setCountry(target.value);
          }}
          endContent={<FiDelete />}
          startContent={<GoSearch />}
          variant="bordered"
          className="p-5"
        />
      </form>

      {
        <h1>
          {errorMessage !== "Parameter q is missing." ? errorMessage : ""}
        </h1>
      }

      <h3 className=" text-center  text-3xl p-2 text-ellipsis m-2 items-center justify-center">
        {country}
      </h3>
      <h3 className=" text-2xl p-2"> {region}</h3>
      <h3 className="text-2xl p-2"> {temp}°C</h3>
      <h3 className="text-2xl p-2"> {day}</h3>
      <h3 className="text-2xl  p-2"> {condition}</h3>

      <Image
        className="m-5"
        src={urlIcon}
      ></Image>
      <div className="m-10">
        <h2>Last Updated</h2>
        <h3>{lastUpdated}</h3>
      </div>
    </div>
  );
};
