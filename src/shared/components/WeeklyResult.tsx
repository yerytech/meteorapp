import { useAppSelector } from "../store/hooks/useFuntionStore";
import { CustomCard } from "./CustomCard";
export const WeeklyResult = () => {
  const { weeklyData } = useAppSelector((state) => state.weather);
  const style = "  sm:w-[100px] sm:h-[100px]  md:w-[100px] md:h-[150px]";
  return (
    <div className="mt-10 flex flex-wrap">
      {weeklyData.map(({ day, urlIcon, temp }) => {
        const fecha = new Date(day);
        const dias = [
          "Domingo",
          "Lunes",
          "Martes",
          "Miércoles",
          "Jueves",
          "Viernes",
          "Sábado",
        ];
        const diaDeLaSemana = dias[fecha.getDay()];
        console.log(diaDeLaSemana);

        return (
          <div key={day}>
            <CustomCard
              className={style}
              title={diaDeLaSemana}
              urlIcon={urlIcon}
              // tipe={"°"}
              children={`${temp}°`}
            />
          </div>
        );
      })}
    </div>
  );
};
