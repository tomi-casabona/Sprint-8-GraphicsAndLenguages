import React from "react";
import { WeeklyGraphic } from "./WeeklyGraphic";
import { TotalBalance } from "./TotalBalance";
import { VariationWithYesterday } from "./VariationWithYesterday";
import { TodaySpentBalance } from "./TodaySpentBalance";

export const WeeklyReport = () => {
  return (
    <div className="m-4">
      <TotalBalance />
      <WeeklyGraphic />
      <div className="flex flex-row justify-between">
        <TodaySpentBalance/>
      <VariationWithYesterday today={5} yesterday={2}/>
      </div>
    </div>
  );
};
