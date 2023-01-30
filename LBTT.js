const LBTT = (value) => {
  let total = 0;

  const taxable = value - 145000;

  if (taxable <= 0) {
    return total;
  }

  const aboveFirstBand = taxable - 105000;

  if (aboveFirstBand <= 0) {
    return taxable * 0.02;
  } else total += 105000 * 0.02;

  const aboveSecondBand = aboveFirstBand - 75000;

  if (aboveSecondBand <= 0) {
    return (total += aboveFirstBand * 0.05);
  } else total += 75000 * 0.05;

  const fourthBand = aboveSecondBand - 425000;

  if (fourthBand <= 0) {
    return (total += aboveSecondBand * 0.1);
  } else return (total += 425000 * 0.1 + fourthBand * 0.12);
};

module.exports = LBTT;
