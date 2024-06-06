import React from "react";
import { WeeklyGraphic } from "./WeeklyGraphic";
import { TotalBalance } from "./TotalBalance";
import { VariationWithYesterday } from "./VariationWithYesterday";
import { TodaySpentBalance } from "./TodaySpentBalance";
import { useSelector } from "react-redux";
import { LenguagesBar } from "../lenguagesComponents/LanguagesBar";

export const WeeklyReport = () => {
  const { today, yesterday } = useSelector(
    (state) => state.compare.compareData
  );
  return (
    <div className="p-4 md:p-6 w-11/12 md:w-5/6 max-w-2xl h-full mx-auto shadow-2xl bg-slate-100">
      <LenguagesBar />  
      <TotalBalance />
      <div>
        <h2 className="text-xl md:text-2xl pb-2 font-bold text-red-400 text-center p-4 md:p-6">
          Weekly expenses
        </h2>
        <WeeklyGraphic />
        <div className="flex flex-row justify-between pt-4 mx-auto">
          <TodaySpentBalance today={today} />
          <VariationWithYesterday today={today} yesterday={yesterday} />
        </div>
      </div>
    </div>
  );
};
