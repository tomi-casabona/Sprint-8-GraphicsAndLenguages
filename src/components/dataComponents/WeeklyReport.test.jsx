import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { describe, it } from "vitest";
import { store } from "../../redux/store";
import { WeeklyReport } from "./WeeklyReport";
import { TotalBalance } from "./TotalBalance";
import { TodaySpentBalance } from "./TodaySpentBalance";
import { VariationWithYesterday } from "./VariationWithYesterday";

const renderWithProviders = (ui) => {
  return render(<Provider store={store}>{ui}</Provider>);
};

describe("WeeklyReport component", () => {
  it("renders TotalBalance component", () => {
    renderWithProviders(<TotalBalance />);
  });

  it("renders WeeklyGraphic component", () => {
    renderWithProviders(<WeeklyReport />);
  });

  it("renders TodaySpent component", () => {
    let today = { day: "Monday ", value: 2 };

    renderWithProviders(<TodaySpentBalance today={today} />);
  });

  it("renders VariatonWithYesterday component", () => {
    let today = { day: "Monday ", value: 2 };
    let yesterday = { day: "Friday ", value: 5 };
    renderWithProviders(
      <VariationWithYesterday today={today} yesterday={yesterday} />
    );
  });
});
