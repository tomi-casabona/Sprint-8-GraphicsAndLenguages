import React from "react";
import { getPercentageDifference } from "../../services/getPercentageDifference";
import { useTranslation } from "react-i18next";

export const VariationWithYesterday = ({ today, yesterday }) => {
  if (today.day === null || today.day === "Monday") return;

  const { t } = useTranslation(["translation"]);

  const percentage = getPercentageDifference(
    today.value,
    yesterday.value
  ).toFixed(2);
  const isPossitive = percentage > 0 ? "+" : "";
  const colorClass = percentage > 0 ? "text-green-400" : " text-red-500";
  return (
    <div className=" flex flex-col ">
      <div
        className={` flex flex-row-reverse text-sm md:text:xl font-bold  ${colorClass}`}
      >
        {isPossitive}
        {percentage}%
      </div>
      <div className={`text-right text-xs md:text:sm font-bold  ${colorClass}`}>
        {t("Compare with", {day: yesterday.day})}
      </div>
    </div>
  );
};
