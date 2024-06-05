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
    <div className="m-4">
      <TotalBalance />
      <WeeklyGraphic />
      <div className="flex flex-row justify-between">
        <TodaySpentBalance />
        <VariationWithYesterday today={today} yesterday={yesterday} />
      </div>
    </div>
  );
};
