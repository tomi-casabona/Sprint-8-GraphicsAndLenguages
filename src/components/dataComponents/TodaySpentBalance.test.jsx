import React from "react";
import { TodaySpentBalance } from "./TodaySpentBalance";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { describe, it, expect, vi } from "vitest";
import { store } from "../../redux/store";

const renderWithProviders = (ui) => {
  return render(<Provider store={store}>{ui}</Provider>);
};

vi.mock("../../assets/icons/EuroBlack", () => ({
  EuroBlack: () => <svg data-testid="euro-icon" />,
}));

describe("TodaySpentBalance", () => {
  it('renders "Pick one day" when today is null', () => {
    let todayData = { day: null, value: null };

    renderWithProviders(<TodaySpentBalance today={todayData} />);
    expect(screen.getByText(/Pick one day/)).toBeInTheDocument();
  });

  it("renders the value and icon when today is provided", () => {
    let todayData = { day: "Monday", value: 10 };
    renderWithProviders(<TodaySpentBalance today={todayData} />);
    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByTestId("euro-icon")).toBeInTheDocument();
  });
});
