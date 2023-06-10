// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
const max_profit = (prices) => {
	let maxValue = 0;
	for (i = 0; i < prices.length - 1; i++) {
		for (j = i + 1; j < prices.length; j++) {
			maxValue = Math.max(maxValue, prices[j] - prices[i]);
		}
	}
	return maxValue;
};

// This is a better solution because here, we shrink the loop as we go.
// We collect all the max profits, and if a lower number comes along further in the array,
// that becomes the new min, because then that would be the best time to buy.
//
// In this way, we don't have to find every single possible profit,
// because we're always keeping track of which day would be the best to buy on
// (ie, which [i] would be the most efficient)
const maxProfit = (prices) => {
	let buy = 0; // Buy
	let sell = 1; // sell
	let max_profit = 0;
	while (sell < prices.length) {
		if (prices[buy] < prices[sell]) {
			let current_profit = prices[sell] - prices[buy]; // our current profit

			max_profit = Math.max(max_profit, current_profit);
		} else {
			// If R < L, move buy pointer to sell location
			buy = sell;
		}
		sell++;
	}
	return max_profit;
};

module.exports = { max_profit, maxProfit };
