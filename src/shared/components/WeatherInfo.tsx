import { TodayHighlights } from "./TodayHighlights";
import { WeeklyResult } from "./WeeklyResult";

export const WeatherInfo = ({ className }: { className: string }) => {
  return (
    <div className={`${className}ml-10 font-medium mt-20`}>
      <WeeklyResult />
      <TodayHighlights />
    </div>
  );
};
