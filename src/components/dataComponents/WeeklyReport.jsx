import React from "react";
import { WeeklyGraphic } from "./WeeklyGraphic";
import { TotalBalance } from "./TotalBalance";
import { VariationWithYesterday } from "./VariationWithYesterday";
import { TodaySpentBalance } from "./TodaySpentBalance";
import { useSelector } from "react-redux";

export const WeeklyReport = () => {
  const { today, yesterday } = useSelector(
    (state) => state.compare.compareData
  );
  return (
    <div className="p-8 w-2/3 h-screen mx-auto shadow-2xl bg-slate-100">
      <TotalBalance />
      <WeeklyGraphic />
      <div className="flex flex-row justify-evenly w-2/3 pt-8 mx-auto">
        <TodaySpentBalance today={today} />
        <VariationWithYesterday today={today} yesterday={yesterday} />
      </div>
    </div>
  );
};
