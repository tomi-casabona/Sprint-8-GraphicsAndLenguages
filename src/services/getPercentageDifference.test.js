import { describe, expect } from "vitest";
import { getPercentageDifference } from "./getPercentageDifference";

describe("getTotal", () => {
  it("should be a function", () => {
    expect(typeof getPercentageDifference).toBe("function");
  });

  it("should receive two numbers as parameters", () => {
    expect(() => getPercentageDifference("a", 2)).toThrow(
      "both parameters must be numbers"
    );
  });

  it("should return a number", () => {
    expect(typeof getPercentageDifference(3, 3)).toBe(
      "number"
    );
  });

  it("should return the porcentual difference betwueen numbers", () => {
    expect(getPercentageDifference(1,2)).toBe(100);
  });
});
