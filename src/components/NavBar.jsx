import React from "react";
import { ChangeTheme } from "./ChangeTheme";
import { LenguagesBar } from "./lenguagesComponents/LenguagesBar";

export const NavBar = () => {
  return (
    <div className="flex flex-row justify-between">
      <ChangeTheme />
      <LenguagesBar />
    </div>
  );
};
