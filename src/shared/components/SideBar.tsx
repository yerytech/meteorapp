import { Image, Input } from "@nextui-org/react";
import { FiDelete } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import { useWeather } from "../store/hooks/useWeather";
import { useEffect, useState } from "react";
interface DaylyWeatherProp {
  country: string;
  region: string;
  temp: string;

  urlIcon: string;
  condition: string;
  errorMessage: string;
  lastUpdated: string;
}
export const SideBar = ({
  country,
  region,
  temp,

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

  const handleDelete = () => {
    if (getCountry.length === 0) return;
    setCountry(getCountry.substring(0, getCountry.length - 1));
  };

  useEffect(() => {
    startSavigData(getCountry);
  }, [getCountry]);
  return (
    <div className=" flex flex-col   bg-slate-300 w-screen  md:w-[400px] items-center justify-items-center rounded-2xl content-center ">
      <form onSubmit={onHandleSubmit}>
        <Input
          value={getCountry}
          type="text"
          onChange={({ target }) => {
            setCountry(target.value);
          }}
          endContent={
            <button
              type="button"
              onClick={handleDelete}
            >
              <FiDelete />
            </button>
          }
          startContent={<GoSearch />}
          variant="bordered"
          className="mb-2 mt-2"
        />
      </form>

      {
        <h1>
          {errorMessage !== "Parameter q is missing." ? errorMessage : ""}
        </h1>
      }

      <h3 className=" sm:text-xl  md:text-xl  text-center  text-3xl  text-ellipsis m-1 items-center justify-center">
        {country}
      </h3>
      <h3 className=" sm:text-xl md:text-sm  text-2xl p-1">{region}</h3>
      <h3 className=" sm:text-xl md:text-xl text-2xl p-1">{temp}°C</h3>

      <h3 className=" sm:text-sm md:text-sm  text-2xl  p-1">{condition}</h3>

      <Image
        className="m-1"
        src={urlIcon}
      ></Image>
      <div className="">
        <h2 className="  sm:text-sm md:text-medium   mb-1">Last Updated</h2>
        <h3 className="md:text-medium sm:text-sm  ">{lastUpdated}</h3>
      </div>
    </div>
  );
};
