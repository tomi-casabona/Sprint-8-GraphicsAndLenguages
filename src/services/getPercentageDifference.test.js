import { describe, it, expect } from "vitest";
import { getPercentageDifference } from "./getPercentageDifference";

describe("getPercentageDifference", () => {
  it("should be a function", () => {
    expect(typeof getPercentageDifference).toBe("function");
  });

  it("should receive two numbers as parameters", () => {
    expect(() => getPercentageDifference("a", 2)).toThrow(
      "both parameters must be numbers"
    );
    expect(() => getPercentageDifference(2, "b")).toThrow(
      "both parameters must be numbers"
    );
    expect(() => getPercentageDifference("a", "b")).toThrow(
      "both parameters must be numbers"
    );
  });

  it("should return a number", () => {
    expect(typeof getPercentageDifference(3, 3)).toBe("number");
  });

  it("should return the correct percentage difference between numbers", () => {
    expect(getPercentageDifference(1, 2)).toBe(100);
    expect(getPercentageDifference(100, 150)).toBe(50);
    expect(getPercentageDifference(50, 75)).toBe(50);
    expect(getPercentageDifference(200, 100)).toBe(-50);
  });
});
