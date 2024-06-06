import React from "react";
import { useTranslation } from "react-i18next";

export const ButtonEnglish = () => {
  const { i18n } = useTranslation(["translation"]);

  return (
    <button
      className="rounded-full w-8 h-8 bg-[url('/src/assets/usa.png')] bg-cover bg-center transition transform hover:scale-110 active:scale-95 border-2 border-slate-500"
      onClick={() => i18n.changeLanguage("en")}
    ></button>
  );
};
