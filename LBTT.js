const LBTT = (value) => {
  let taxable = value - 145000;
  if (taxable <= 0) {
    return 0;
  }
  if (taxable - 105000 <= 0) {
    return taxable * 0.02;
  }
};

module.exports = LBTT;
