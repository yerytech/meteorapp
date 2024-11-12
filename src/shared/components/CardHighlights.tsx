interface CardProps {
  title: string;
  data: string;
  info: string;
}

export const CardHighlights = ({ title, data, info }: CardProps) => {
  return (
    <div className="m-2 bg-white w-[300px] h-[250px] rounded-2xl shadow-lg">
      <h1 className="  m-4 text-xl  text-gray-400">{title}</h1>
      <h1 className="  m-10 text-6xl  text-center "> {data}</h1>
      <h1 className="  ml-4 text-lg ">{info}</h1>
    </div>
  );
};
