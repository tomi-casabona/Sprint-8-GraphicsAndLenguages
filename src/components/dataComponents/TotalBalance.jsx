import React from "react";
import { useSelector } from "react-redux";
import { getTotal } from "../../services/getTotal";
import { Euro } from "../../assets/icons/Euro";
import { useTranslation } from "react-i18next";

export const TotalBalance = () => {
  const data = useSelector((state) => state.data.weekData);
  const total = getTotal(data);
  const { t } = useTranslation(["translation"]);

  return (
    <div className="rounded-md bg-primary p-2 md:p-4 text-white font-semibold mx-auto">
      <div className="text-sm md:text-lg pb-2 ">{t("Total-balance")}</div>
      <div className="flex flex-row">
        {total}
        {<Euro />}
      </div>
    </div>
  );
};
