// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
const majorityElement = (arr) => {
	const map = {};

	let solution = arr[0];
	for (i = 0; i < arr.length; i++) {
		if (map[arr[i]]) {
			map[arr[i]]++;
		} else {
			map[arr[i]] = 1;
		}
		if (map[arr[i]] > arr.length / 2) {
			solution = arr[i];
		}
	}
	return solution;
};

module.exports = majorityElement;
