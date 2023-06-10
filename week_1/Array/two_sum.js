// var twoSum = function (nums, target) {
// 	for (i = 0; i < nums.length; i++) {
// 		let pal = target - nums[i];
// 		let isPal = (element) => element === pal;
// 		let palIndex = nums.findIndex(isPal);
// 		if (palIndex > -1 && palIndex !== i) {
// 			console.log(i, palIndex);
// 		}
// 	}
// };

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
const twoSum = (nums, target) => {
	const map = new Map();
	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i];
		if (map.has(complement)) {
			return [map.get(complement), i];
		}
		map.set(nums[i], i);
	}
	return [];
};

module.exports = twoSum;
