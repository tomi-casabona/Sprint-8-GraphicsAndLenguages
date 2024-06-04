import React from "react";
import { getPercentageDifference } from "../../services/getPercentageDifference";

export const VariationWithYesterday = ({ today, yesterday }) => {
  const percentage = getPercentageDifference(today, yesterday);
  const isPossitive = percentage > 0 ? "+" : "-";
  const colorClass = percentage > 0 ? "text-green-400" : " text-red-500";
  return (
    <div className=" flex flex-col ">
      <div
        className={` flex flex-row-reverse  text-xl font-bold ${colorClass}`}
      >
        {isPossitive}
        {percentage}%
      </div>
      <div className={`text-right text-sm font-bold ${colorClass}`}>
        From yesterday
      </div>
    </div>
  );
};
