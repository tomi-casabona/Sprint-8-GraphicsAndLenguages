import React from "react";

export const getTotal = (data) => {
  if (typeof data !== "object" || data === null) {
    throw new Error("parameter must be an object");
  }
  if (Object.values(data).every((value) => typeof value === "number") === false)
    throw new Error("any value is not a number");
  const total = Object.values(data).reduce((total, value) => total + value);
  return total;
};
