import { ReactNode } from "react";

interface CardProps {
  title: string;
  data: string;
  tipe: string;
  children: ReactNode;
}

export const CardHighlights = ({ title, data, tipe, children }: CardProps) => {
  return (
    <div className="m-2 bg-white w-[250px] h-[200px] rounded-2xl shadow-lg items-center justify-center">
      <h1 className="  m-4 text-xl  text-gray-400">{title}</h1>
      <div className="flex flex-row items-center justify-center">
        <h1 className="  mr-2 text-5xl  text-center "> {data}</h1>
        <h3 className=" text-xl  text-gray-400">{tipe}</h3>
      </div>
      <div className="m-4 w-10 items-center justify-end ">{children}</div>
    </div>
  );
};
