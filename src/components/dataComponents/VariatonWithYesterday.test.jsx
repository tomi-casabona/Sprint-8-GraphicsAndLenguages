import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import { VariationWithYesterday } from "./VariationWithYesterday";

describe("VariationWithYesterday", () => {
  it("renders nothing if today is null", () => {
    vi.mock("../../services/getPercentageDifference", () => ({
      getPercentageDifference: vi.fn(),
    }));

    render(
      <VariationWithYesterday
        today={{ day: null, value: null }}
        yesterday={{ day: "Sunday", value: 50 }}
      />
    );
    expect(screen.queryByText(/Compare with/)).not.toBeInTheDocument();
  });

  it("renders nothing if today is Monday", () => {
    vi.mock("../../services/getPercentageDifference", () => ({
      getPercentageDifference: vi.fn(),
    }));

    render(
      <VariationWithYesterday
        today={{ day: "Monday", value: 10 }}
        yesterday={{ day: "Sunday", value: 50 }}
      />
    );
    expect(screen.queryByText(/Compare with/)).not.toBeInTheDocument();
  });

  it("renders the negative percentage difference correctly", () => {
    vi.mock("../../services/getPercentageDifference", () => ({
      getPercentageDifference: vi.fn().mockReturnValue(-10),
    }));

    render(
      <VariationWithYesterday
        today={{ day: "Tuesday", value: 90 }}
        yesterday={{ day: "Monday", value: 100 }}
      />
    );
    expect(screen.getByText(/-/)).toBeInTheDocument();
    expect(screen.getByText(/%/)).toHaveClass("text-red-500");
  });
});
