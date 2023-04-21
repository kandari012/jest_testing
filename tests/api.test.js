const asset = require("../controller/asset");
const fxn = require("../services.js/asset");

let httpStatus = require("http-status");

describe("test api", () => {
  const res = {
    status: undefined,
    json: undefined,
  };
  let req = undefined;
  let next = undefined;

  beforeEach(() => {
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    req = {};
    next = jest.fn();
  });

  describe("getcdf", () => {
    test("should calll get asset", async () => {
      req = {
        body: { limit: 4, cursor: "test" },
      };

      const mockResult = "function called from test";

      const mockGetCDFAssetFunction = jest
        .spyOn(fxn, "getFxn")
        .mockResolvedValue(mockResult);

      await asset.getData(req, res, next);

      expect(mockGetCDFAssetFunction).toHaveBeenCalledWith("test", 4);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockResult);
    });
  });
});
