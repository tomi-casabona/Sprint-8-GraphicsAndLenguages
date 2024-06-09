import React from "react";
import { useTranslation } from "react-i18next";

export const ButtonCatalan = () => {
  const { i18n } = useTranslation(["translation"]);

  return (
    <button
      className="rounded-full first:w-8 h-8 bg-[url('/src/assets/cat.png')] bg-cover bg-center transition transform hover:scale-110 active:scale-95 border-2 border-slate-500"
      onClick={() => i18n.changeLanguage("ca")}
    ></button>
  );
};
