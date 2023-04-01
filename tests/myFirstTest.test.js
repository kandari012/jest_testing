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

describe("testing other variable methods", () => {
  test("testing that variable is undefined", () => {
    let a = undefined;
    expect(a).not.toBeDefined();
    expect(a).toBeUndefined();
    expect(a).not.toBeNull();
    expect(a).toBeFalsy();
    expect(a).not.toBeTruthy();
  });

  test("number compare", () => {
    let a = 2;
    let b = 3;
    expect(a + b).toBeGreaterThan(2);
    expect(a + b).toBeLessThanOrEqual(8);
  });
});

describe("string testing", () => {
  test("contains", () => {
    let a = "chistophar";
    expect(a).toMatch(/stop/i);
  });
});

describe("array testing", () => {
  test("includes", () => {
    let a = ["milk", "power"];
    expect(a).toContain("milk");
    expect(a).not.toContain("AZ");
  });
});
