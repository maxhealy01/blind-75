// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
/**
 * @param {number[]} prices
 * @return {number} the maximum possible price
 */
const maxProfit = (prices) => {
	let buy = 0;
	let sell = 1;
	let max_profit = 0;
	while (sell < prices.length) {
		if (prices[buy] < prices[sell]) {
			const current_profit = prices[sell] - prices[buy];

			max_profit = Math.max(max_profit, current_profit);
		} else {
			buy = sell;
		}
		sell++;
	}
	return max_profit;
};

module.exports = maxProfit;
