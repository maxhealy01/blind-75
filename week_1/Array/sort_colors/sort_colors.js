// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You may not use the sort method.

// Warning: This algorithm mutates the input array.
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
	let low = 0;
	let current = 0;
	let high = nums.length - 1;

	while (current <= high) {
		// This swap ensures that every value whose index < low is equal to 0
		if (nums[current] == 0) {
			swap(low, current);
			low++;
			current++;
		}
		// This swap ensures that every value whose index > high is equal to 2
		else if (nums[current] == 2) {
			swap(current, high);
			high--;
		} else {
			current++;
		}
	}

	function swap(a, b) {
		[nums[a], nums[b]] = [nums[b], nums[a]];
	}
};

module.exports = sortColors;
