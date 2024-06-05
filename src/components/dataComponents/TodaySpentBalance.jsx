import React from "react";
import { EuroBlack } from "../../assets/icons/EuroBlack";

export const TodaySpentBalance = ({ today }) => {
  if (today === null)
    return (
      <div className="text-2xl font-bold flex flex-row items-center">
        Select one day
      </div>
    );
  return (
    <div className="text-2xl font-bold flex flex-row items-center">
      <EuroBlack />
      {today.value}
    </div>
  );
};
