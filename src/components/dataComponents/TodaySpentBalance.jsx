import React from "react";
import { EuroBlack } from "../../assets/icons/EuroBlack";

export const TodaySpentBalance = ({ today }) => {
  if (today.value === null)
    return (
      <span className="text-xs md:text-sm text-slate-300 font-semibold text-center pt-4 mx-auto">
        Pick one day for get info
      </span>
    );
  return (
    <div className="text-lg md:text:2xl font-bold flex flex-row items-center">
      <EuroBlack />
      <p>{today.value}</p>
    </div>
  );
};
