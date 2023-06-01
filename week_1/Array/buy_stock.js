// start on 0, loop through all, comparing value of j-i
// compare this value to maxValue
// then slide the window
// var maxProfit = (prices) => {
// 	let maxValue = 0;
// 	for (i = 0; i < prices.length - 1; i++) {
// 		for (j = i + 1; j < prices.length; j++) {
// 			maxValue = Math.max(maxValue, prices[j] - prices[i]);
// 		}
// 	}
// 	return maxValue;
// };

// This is a better solution because here, we shrink the loop as we go.
// We collect all the max profits, and if a lower number comes along further in the array,
// that becomes the new min, because then that would be the best time to buy.
//
// In this way, we don't have to find every single possible profit,
// because we're always keeping track of which day would be the best to buy on
// (ie, which [i] would be the most efficient)
const maxProfit = (prices) => {
	let left = 0; // Buy
	let right = 1; // sell
	let max_profit = 0;
	while (right < prices.length) {
		if (prices[left] < prices[right]) {
			let profit = prices[right] - prices[left]; // our current profit

			max_profit = Math.max(max_profit, profit);
		} else {
			// If R < L, move left pointer right
			left = right;
		}
		right++;
	}
	return max_profit;
};

console.log(maxProfit([7, 1, 5, 3, 8, 4]));
