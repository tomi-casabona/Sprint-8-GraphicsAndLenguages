import React from "react";
import { TodaySpentBalance } from "./TodaySpentBalance";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { describe, it, expect, vi } from "vitest";
import { configureStore } from "@reduxjs/toolkit";

const mockState = {
  data: {
    weekData: {
      lunes: 1,
      martes: 2,
      miercoles: 3,
      jueves: 4,
      viernes: 5,
      sabado: 6,
      domingo: 7,
    },
  },
};

const mockStore = configureStore({
  reducer: {
    data: (state = mockState.data) => state,
  },
});

const renderWithProviders = (ui) => {

  return render(<Provider store={mockStore}>{ui}</Provider>);
};

vi.mock("../../assets/icons/EuroBlack", () => ({
  EuroBlack: () => <svg data-testid="euro-icon" />,
}));

describe("TodaySpentBalance", () => {
  it('renders "Select one day" when today is null', () => {
    renderWithProviders(<TodaySpentBalance today={null} />);
    expect(screen.getByText("Select one day")).toBeInTheDocument();
  });

  it("renders the value and icon when today is provided", () => {
    const todayData = { day: "Monday", value: 10 };
    renderWithProviders(<TodaySpentBalance today={todayData} />);
    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByTestId("euro-icon")).toBeInTheDocument();
  });
});
