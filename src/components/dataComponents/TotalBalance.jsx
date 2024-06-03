import React from "react";
import { useSelector } from "react-redux";
import { getTotal } from "../../services/getTotal";

export const TotalBalance = () => {
  const data = useSelector((state) => state.data.weekData);
  const total = getTotal({ data });
  return (
    <div>
      <div>lunes {data.lunes}</div>
      <div>martes {data.martes}</div>
      <div>miercoles {data.miercoles}</div>
      <div>total : {total}</div>
    </div>
  );
};
