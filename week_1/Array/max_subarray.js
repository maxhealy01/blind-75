// Given an integer array nums, find the subarray with the largest sum, and return its sum.
const maxSubArray = (arr) => {
	var prev = 0;
	var max = -Infinity;

	for (let i = 0; i < arr.length; i++) {
		// See what's greater: the whole previous array + new value, or the new value
		// If new value's greater, cut off the previous
		prev = Math.max(prev + arr[i], arr[i]);
		max = Math.max(max, prev);
	}
	return max;
};

module.exports = maxSubArray;
