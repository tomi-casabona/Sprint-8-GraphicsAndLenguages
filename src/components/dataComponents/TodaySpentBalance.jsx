import React from "react";
import { EuroBlack } from "../../assets/icons/EuroBlack";
import { useTranslation } from "react-i18next";

export const TodaySpentBalance = ({ today }) => {
  const { t } = useTranslation(["translation"]);

  if (today.value === null)
    return (
      <span className="text-xs md:text-sm text-primary font-semibold text-center pt-4 mx-auto">
        {t("Pick one day for get info")}
      </span>
    );
  return (
    <div className="flex flex-col text-lg md:text:2xl font-bold">
      <div className="text-sm text-slate-800">{t("today expenses")}</div>
      <div className="flex flex-row ">
        <EuroBlack />
        <p>{today.value}</p>
      </div>
    </div>
  );
};
