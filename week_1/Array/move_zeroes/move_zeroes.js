// Given an integer array nums, this algorithm moves all 0's to the end of it while maintaining the relative order of the non-zero elements.

// This operation occurs in place, meaning that the array is mutated. Be careful!
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
	let zeroCount = 0;
	for (i = 0; i < nums.length; i++) {
		if (nums[i] === 0) {
			nums.splice(i, 1);
			i--;
			zeroCount++;
		}
	}
	for (i = 0; i < zeroCount; i++) {
		nums.push(0);
	}
};

module.exports = moveZeroes;
