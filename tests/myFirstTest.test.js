describe("testing reference equality", () => {
  const user = {
    name: "rahul",
  };
  user.age = 45;

  test("should return a user with age 45", () => {
    expect(user).toEqual({
      // for reference type use toEqual instead of toBe
      name: "rahul",
      age: 45,
    });
  });

  test("should return a user with age and name key", () => {
    expect(user).toEqual(
      expect.objectContaining({
        name: expect.any(String),
        age: expect.any(Number),
      })
    );
  });

  //   array equality

  test("Array enuality", () => {
    const users = ["rahul", "sara", "ab"];

    users.push("jacob");
    expect(users).toEqual(["rahul", "sara", "ab", "jacob"]);
    expect(users).toEqual(expect.arrayContaining([expect.any(String)]));

    const userObject = [
      {
        name: "clement",
        age: 12,
      },
      {
        name: "rk",
        age: 19,
      },
      ,
      {
        name: "raja",
        age: 35,
      },
    ];

    expect(userObject).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          age: expect.any(Number),
        }),
      ])
    );
  });
});
