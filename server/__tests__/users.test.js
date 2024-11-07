const { describe, it } = require("@jest/globals");
const { registerUserHandler } = require("../handlers/users");

const mockRequest = {
  username: "",
  email: "",
  password: "",
};

const mockResponse = {};

describe("registerUsers", () => {
  it("should require username", () => {
    registerUserHandler(mockRequest);
  });
});
