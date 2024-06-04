import React from "react";
import { EuroBlack } from "../../assets/icons/EuroBlack";

export const TodaySpentBalance = ({ today = "0" }) => {
  return (
    <div className="text-2xl font-bold flex flex-row items-center">
      <EuroBlack />
      {today}
    </div>
  );
};
