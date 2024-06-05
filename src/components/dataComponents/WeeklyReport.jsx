import React from "react";
import { WeeklyGraphic } from "./WeeklyGraphic";
import { TotalBalance } from "./TotalBalance";
import { VariationWithYesterday } from "./VariationWithYesterday";
import { TodaySpentBalance } from "./TodaySpentBalance";
import { useSelector } from "react-redux";

export const WeeklyReport = () => {
  const { today } = useSelector((state) => state.compare.compareData);
  console.log(today + " desde el state");
  return (
    <div className="m-4">
      <TotalBalance />
      <WeeklyGraphic />
      <div className="flex flex-row justify-between">
        <TodaySpentBalance />
        <VariationWithYesterday today={5} yesterday={2} />
      </div>
    </div>
  );
};
