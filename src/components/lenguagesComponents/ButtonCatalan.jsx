import React from "react";

export const ButtonCatalan = () => {
  const handleClick = () => {};
  return (
    <button
      className="rounded-full first:w-8 h-8 bg-[url('/src/assets/cat.png')] bg-cover bg-center transition transform hover:scale-110 active:scale-95 border-2 border-slate-500"
      onClick={handleClick}
    ></button>
  );
};
