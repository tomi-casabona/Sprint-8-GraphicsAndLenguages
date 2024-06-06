import React from "react";

export const ButtonEnglish = () => {
  const handleClick = () => {};
  return (
    <button
      className="rounded-full w-8 h-8 bg-[url('/src/assets/usa.png')] bg-cover bg-center transition transform hover:scale-110 active:scale-95 border-2 border-slate-500"
      onClick={handleClick}
    ></button>
  );
};
