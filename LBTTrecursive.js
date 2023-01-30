const LBTTrecursive = (value) => {
  let remaining = value;
  const rates = [0, 0.02, 0.05, 0.1, 0.12];
  const bands = [145000, 105000, 75000, 425000, remaining];

  const taxDue = (remaining, i = 0) => {
    let total = 0;

    if (remaining - bands[i] > 0) {
      total += bands[i] * rates[i];
      remaining -= bands[i];
    } else return remaining * rates[i];

    return total + taxDue(remaining, i + 1);
  };

  return taxDue(remaining);
};

module.exports = LBTTrecursive;
