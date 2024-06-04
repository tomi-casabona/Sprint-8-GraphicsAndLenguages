import React from "react";
import { WeeklyGraphic } from "./WeeklyGraphic";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { describe, expect, it, vi } from "vitest";
import { configureStore } from "@reduxjs/toolkit";

const renderWithProviders = (ui) => {
  return render(<Provider store={mockStore}> {ui}</Provider>);
};

const mockState = {
  data: {
    weekData: {
      Monday: 1,
      Tuesday: 2,
      Wednesday: 3,
      Thursday: 4,
      Friday: 5,
      Saturday: 6,
      Sunday: 7,
    },
  },
};

const mockStore = configureStore({
  reducer: {
    data: (state = mockState.data) => state,
  },
});

describe("WeeklyGraphic Component", () => {
  it("should render text correctly", () => {
    renderWithProviders(<WeeklyGraphic />);
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
  });
});
