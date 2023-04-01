describe("number operations", () => {
  test("1 plus 1 equal to 2", () => {
    let a = 1;
    let b = 2;
    expect(a + b).toBe(3);
  });

  test("2 plus 3 not equal to 3", () => {
    let a = 2;
    let b = 3;
    expect(a + b).not.toBe(3);
  });
});
