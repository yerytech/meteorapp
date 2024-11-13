import { Image } from "@nextui-org/react";
import { ReactNode } from "react";

interface CardProps {
  title?: string;
  data?: string;
  tipe?: string;
  children?: ReactNode;
  className?: string;
  urlIcon?: string;
}

export const CustomCard = ({
  title,
  data,
  tipe,
  children,
  className,
  urlIcon,
}: CardProps) => {
  return (
    <div
      className={`${className} m-2 bg-white   rounded-2xl shadow-lg items-center justify-center`}
    >
      <h1 className=" sm:text-sm m-4  md:text-medium  text-gray-400">
        {title}
      </h1>
      <div className=" sm:text-sm  md:text-xl flex flex-row items-center justify-center">
        <h1 className=" sm:text-2xl mr-2 md:text-3xl  text-center ">{data}</h1>
        <Image
          className="m-1"
          src={urlIcon}
        ></Image>
        <h3 className=" sm:text-sm text-xl  text-gray-400">{tipe}</h3>
      </div>
      <div className=" sm:w-5 m-2 w-11 items-center justify-end">
        {children}
      </div>
    </div>
  );
};
