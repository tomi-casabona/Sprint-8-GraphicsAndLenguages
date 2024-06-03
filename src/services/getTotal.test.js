import { describe, expect } from "vitest";
import { getTotal } from "./getTotal";

describe("getTotal", () => {
  it("should be a function", () => {
    expect(typeof getTotal).toBe("function");
  });

  it("should receive an object", () => {
    expect(() => getTotal()).toThrow("parameter must be an object");
  });

  it("should return a number", () => {
    expect(getTotal({ lunes: 3 })).toBe(3);
  });

  it("should have numbers as value keys", () => {
    const data = { lunes: 3, martes: 2 };

    Object.keys(data).forEach((key) => {
      expect(typeof data[key]).toBe("number");
    });
  });

  it("should return the addition of all the numbers", () => {
    expect(getTotal({ lunes: 1, martes: 2 })).toBe(3);      
  });
});
