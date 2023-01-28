const LBTT = (value) => {
  let taxable = value - 145000;
  let total = 0;
  if (taxable <= 0) {
    return 0;
  }
  const secondBand = taxable - 105000;
  if (secondBand <= 0) {
    return taxable * 0.02;
  } else total += 105000 * 0.02;
  const thirdBand = secondBand - 75000;
  if (thirdBand <= 0) {
    return (total += secondBand * 0.05);
  } else total += 75000 * 0.05;
  const fourthBand = thirdBand - 425000;
  if (fourthBand <= 0) {
    return (total += thirdBand * 0.1);
  }
};

module.exports = LBTT;
