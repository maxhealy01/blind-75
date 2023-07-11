// Given an array and a length, find the maximum subarray of the given length.
function maxSubarraySum(arr, length) {
	let count = 0,
		max = 0;

	if (arr.length < length) return null;
	for (let i = 0; i < length; i++) {
		max += arr[i];
	}
	count = max;
	for (let i = length; i < arr.length; i++) {
		count += arr[i];
		count -= arr[i - length];
		max = Math.max(count, max);
	}
	return max;
}
console.log(
	maxSubarraySum(
		[
			10, 5, 3, 7, 300, 2, 123, 10, 234, 8, 234, 7, 45, 87, 54, 78, 34, 23, 1,
			5, 4,
		],
		3
	)
);
module.exports = maxSubarraySum;
