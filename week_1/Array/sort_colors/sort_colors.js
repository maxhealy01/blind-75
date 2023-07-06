// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You may not use the sort method.

// Warning: This algorithm mutates the input array.
/**
 * @param {number[]} colors
 * @return {void} Do not return anything, modify colors in-place instead.
 */
const sortColors = (colors) => {
	let low = 0;
	let current = 0;
	let high = colors.length - 1;

	while (current <= high) {
		// This swap ensures that every value whose index < low is equal to 0
		if (colors[current] == 0) {
			if (low !== current) {
				[colors[low], colors[current]] = [colors[current], colors[low]];
			}
			low++;
			current++;
		}
		// This swap ensures that every value whose index > high is equal to 2
		else if (colors[current] == 2) {
			if (high !== current) {
				[colors[high], colors[current]] = [colors[current], colors[high]];
			}
			high--;
		} else {
			current++;
		}
	}
};

module.exports = sortColors;
