import React from "react";
import { useSelector } from "react-redux";
import { getTotal } from "../../services/getTotal";
import { Euro } from "../../assets/icons/Euro";

export const TotalBalance = () => {
  const data = useSelector((state) => state.data.weekData);
  const total = getTotal(data);

  return (
    <div className="rounded-md bg-orange-400 p-2 md:p-4 text-white font-semibold mx-auto">
      <div className="text-sm md:text-lg pb-2 ">Total balance</div>
      <div className="flex flex-row">
        {total}
        {<Euro />}
      </div>
    </div>
  );
};
