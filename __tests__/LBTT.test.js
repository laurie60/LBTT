const LBTT = require("../LBTT");

//take in variables and a number representinmg the value of the house and work out the tax due according to the variables and the price

describe("LBTT", () => {
  it("returns zero if passed zero", () => {
    const value = 0;
    const result = LBTT(value);
    expect(result).toBe(0);
  });
});
