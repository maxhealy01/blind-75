// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The algorithm must run in O(n) time and can't use the division operator.
/**
 * @param {number[]} an array of numbers
 * @return {number[]} an array of products
 */

const productExceptSelf = (nums) => {
	let fromLeft = [];
	let leftMultiplier = 1;

	// This loop creates an array where each index is equal to the product of all nums to the left of nums[i]
	for (let i = 0; i < nums.length; i++) {
		fromLeft[i] = leftMultiplier;
		leftMultiplier *= nums[i];
	}

	let fromRight = [];
	let rightMultiplier = 1;

	// This loop creates an array where each index is equal to the product of all nums to the right of nums[i]
	// We then multiply that index by the same index of fromLeft in order to get the product of all nums to the right and left of nums[i]
	for (let i = nums.length - 1; i >= 0; i--) {
		fromRight[i] = rightMultiplier;
		rightMultiplier *= nums[i];
		fromRight[i] *= fromLeft[i];
	}

	return fromRight;
};

module.exports = productExceptSelf;
