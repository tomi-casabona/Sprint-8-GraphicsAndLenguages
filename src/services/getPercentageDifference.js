export const getPercentageDifference = (today, yesterday) => {
  if (typeof yesterday != "number" || typeof today != "number")
    throw new Error("both parameters must be numbers");
  const difference = ((today - yesterday) / yesterday) * 100;
  return difference;
};
