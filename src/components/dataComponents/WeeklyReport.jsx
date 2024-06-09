import React from "react";
import { WeeklyGraphic } from "./WeeklyGraphic";
import { TotalBalance } from "./TotalBalance";
import { VariationWithYesterday } from "./VariationWithYesterday";
import { TodaySpentBalance } from "./TodaySpentBalance";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { NavBar } from "../NavBar";

export const WeeklyReport = () => {
  const { today, yesterday } = useSelector(
    (state) => state.compare.compareData
  );
  const { t } = useTranslation(["translation"]);

  return (
    <div className="p-4 md:p-6 w-11/12 md:w-5/6 max-w-2xl h-full mx-auto shadow-2xl bg-secondary">
      <NavBar />
      <TotalBalance />
      <div>
        <h2 className="text-xl md:text-2xl pb-2 font-bold text-primary text-center p-4 md:p-6">
          {t("Weekly-expenses")}
        </h2>
        <WeeklyGraphic />
        <div className="flex flex-row justify-between pt-4 mx-auto">
          <TodaySpentBalance today={today} />
          <VariationWithYesterday today={today} yesterday={yesterday} />
        </div>
      </div>
    </div>
  );
};
