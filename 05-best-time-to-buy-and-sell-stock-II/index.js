/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  return prices.reduce(
    ({ profit, lastPrice }, currentPrice) => {
      if (currentPrice > lastPrice) {
        return {
          profit: profit + (currentPrice - lastPrice),
          lastPrice: currentPrice,
        };
      } else {
        return { profit, lastPrice: currentPrice };
      }
    },
    { profit: 0, currentPrice: Number.MAX_VALUE }
  ).profit;
};
