import React from "react";
import { TotalBalance } from "./TotalBalance";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { configureStore } from "@reduxjs/toolkit";

const renderWithProviders = (ui) => {
  return render(<Provider store={mockStore}> {ui}</Provider>);
};

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

vi.mock("../../assets/icons/Euro", () => ({
  Euro: () => <svg data-testid="euro-icon" />,
}));

describe("TotalBalance Component", () => {
  it("should render text correctly", () => {
    renderWithProviders(<TotalBalance />);
    const totalBalanceText = screen.getByText("Total balance");
    expect(totalBalanceText).toBeInTheDocument();
  });

  it("should render the correct total", () => {
    renderWithProviders(<TotalBalance />);
    const total = screen.getByText("28");
    expect(total).toBeInTheDocument();
  });

  it("should render the Euro icon", () => {
    renderWithProviders(<TotalBalance />);
    const euroIcon = screen.getByTestId("euro-icon");
    expect(euroIcon).toBeInTheDocument();
  });
});
