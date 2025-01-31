const { getCities } = require("../src/index");

describe("getCities", () => {
  it("should be defined", () => {
    expect(getCities).toBeDefined();
  });

  it("should return an array when a valid state is provided", () => {
    const exampleState = "Johor";
    expect(Array.isArray(getCities(exampleState))).toBe(true);
  });

  it("should return correct cities for a given state", () => {
    const exampleState = "Johor";
    const expectedCities = ["Johor Bahru", "Masai"];
    const cities = getCities(exampleState);
    expectedCities.forEach((city) => {
      expect(cities).toContain(city);
    });
  });

  it("should handle invalid states appropriately", () => {
    const invalidState = "InvalidState";
    const response = getCities(invalidState);
    expect(response).toEqual([]);
  });
});
