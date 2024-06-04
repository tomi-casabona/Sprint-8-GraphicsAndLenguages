import React from "react";
import { WeeklyGraphic } from "./WeeklyGraphic";
import { TotalBalance } from "./TotalBalance";
import { VariationWithYesterday } from "./VariationWithYesterday";

export const WeeklyReport = () => {
  return (
    <div className="m-4">
      <TotalBalance />
      <WeeklyGraphic />
      <VariationWithYesterday today={5} yesterday={2}/>
    </div>
  );
};
