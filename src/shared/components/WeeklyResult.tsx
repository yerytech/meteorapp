import { CustomCard } from "./CustomCard";
export const WeeklyResult = () => {
  const style = "  sm:w-[100px] sm:h-[100px]  md:w-[100px] md:h-[150px]";
  return (
    <div className="mt-10 flex flex-wrap">
      <CustomCard
        className={style}
        title={"Sun"}
        urlIcon={"sun"}
        tipe={"15"}
        children={""}
      />

      <CustomCard
        className={style}
        title={"Mon"}
        urlIcon={"sun"}
        tipe={"15"}
        children={""}
      />
      <CustomCard
        className={style}
        title={"Tue"}
        urlIcon={"sun"}
        tipe={"15"}
        children={""}
      />
      <CustomCard
        className={style}
        title={"Wend"}
        urlIcon={"sun"}
        tipe={"15"}
        children={""}
      />
      <CustomCard
        className={style}
        title={"Thu"}
        urlIcon={"sun"}
        tipe={"15"}
        children={""}
      />
      <CustomCard
        className={style}
        title={"Fri"}
        urlIcon={"sun"}
        tipe={"15"}
        children={""}
      />
      <CustomCard
        className={style}
        title={"Sat"}
        urlIcon={"sun"}
        tipe={"15"}
        children={""}
      />
    </div>
  );
};
