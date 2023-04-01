const { sum } = require("../utils/practice");

describe("testing imported fxn", () => {
  test("sum function", () => {
    expect(sum(5, 3)).toBe(8);
  });
});
