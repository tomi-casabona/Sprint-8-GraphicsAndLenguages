import React from "react";
import { ButtonCatalan } from "./ButtonCatalan";
import { ButtonEnglish } from "./ButtonEnglish";
import { ButtonSpanish } from "./ButtonSpanish";

export const LenguagesBar = () => {
  return (
    <div className="flex gap-2 flex-row-reverse pb-4">
      <ButtonCatalan />
      <ButtonSpanish />
      <ButtonEnglish />
    </div>
  );
};
