// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The algorithm must run in O(n) time and can't use the division operator.
/**
 * @param {number[]} an array of numbers
 * @return {number[]} an array of products
 */

const productExceptSelf = (nums) => {
	// Instantiate arrays to gather multipliers
	const fromLeft = [];
	const fromRight = [];

	let leftMultiplier = 1;
	let rightMultiplier = 1;

	// Gather multipliers in one pass
	let right = nums.length - 1;
	let left = 0;
	while (left < nums.length) {
		fromLeft[left] = leftMultiplier;
		leftMultiplier *= nums[left];

		fromRight[right] = rightMultiplier;
		rightMultiplier *= nums[right];

		right--;
		left++;
	}

	const products = [];
	// Multiple all numbers to the left and right of a given index, then store that value in a new array
	for (let i = 0; i < nums.length; i++) {
		products[i] = fromRight[i] * fromLeft[i];
	}

	return products;
};

module.exports = productExceptSelf;
