const { sum, deleteUser } = require("../utils/practice");

let userdata = [];
beforeAll(() => {
  console.log("run before all test");
  userdata = ["clement", "saerah"];
});
beforeEach(() => {
  console.log("running  before each test");
});
afterEach(() => {
  console.log("running  after each test");
});
afterAll(() => {
  console.log("run after all test");
  userdata = [];
});

describe("testing imported fxn", () => {
  test("sum function", () => {
    expect(sum(5, 3)).toBe(8);
  });

  test("delete by ID function", () => {
    let user = [
      {
        name: "rk1",
        age: 23,
        id: 1,
      },
      {
        name: "rk2",
        age: 28,
        id: 2,
      },
      {
        name: "rk3",
        age: 26,
        id: 3,
      },
    ];
    expect(deleteUser(user, 3)).toEqual([
      {
        name: "rk1",
        age: 23,
        id: 1,
      },
      {
        name: "rk2",
        age: 28,
        id: 2,
      },
    ]);
  });
});
