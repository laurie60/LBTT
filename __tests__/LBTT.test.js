const LBTT = require("../LBTT");

//take in variables and a number representinmg the value of the house and work out the tax due according to the variables and the price

describe("LBTT", () => {
  it("returns zero if passed zero", () => {
    const value = 0;
    const result = LBTT(value);
    expect(result).toBe(0);
  });
  it("returns zero if passed a value of < 145000", () => {
    const value = 20000;
    const result = LBTT(value);
    expect(result).toBe(0);
  });
  it("returns zero if passed a value = 145000", () => {
    const value = 145000;
    const result = LBTT(value);
    expect(result).toBe(0);
  });
  it("returns correct result if passed a value in the first tax paying band", () => {
    const value = 200000;
    const result = LBTT(value);
    expect(result).toBe(1100);
  });
  it("returns correct result if passed maximum value of the first tax paying band", () => {
    const value = 250000;
    const result = LBTT(value);
    expect(result).toBe(2100);
  });
});
