const prices = [7, 1, 5, 3, 6, 4];

const bestTimeToBuySell = (prices) => {
  let currentHighest = -9999,
    currentMin = 9999;
  let resMax = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > currentHighest) {
      currentHighest = prices[i];
    } else if (prices[i] <= currentMin) {
      currentMin = prices[i];
      currentHighest = prices[i];
    }

    resMax = Math.max(resMax, currentHighest - currentMin);
  }

  console.log(currentHighest, currentMin, resMax);
};

bestTimeToBuySell(prices);
