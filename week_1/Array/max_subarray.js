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

console.log(maxSubArray([1, -2, 3, -5, 6, 7, 8, 0, 2, 55, 6, 7]));
module.exports = maxSubArray;