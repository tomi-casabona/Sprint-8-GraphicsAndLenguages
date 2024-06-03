import React from "react";
import { useSelector } from "react-redux";

export const TotalBalance = () => {
  const data = useSelector((state) => state.data.weekData);
  console.log(data);
  return (
    <div>
      <div>lunes {data.lunes}</div>
      <div>martes {data.martes}</div>
      <div>miercoles {data.miercoles}</div>
    </div>
  );
};
