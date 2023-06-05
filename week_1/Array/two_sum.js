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

// This is a better solution, because there's a lot going on under the hood in JS methods.
// Specifically, .findIndex traverses the entire array each loop iteration,
// which causes the runtime to get pretty massive.
// Maps are quicker to traverse because they store data in key:value pairs,
// whereas arrays store data in order.
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
console.log(twoSum([2, 7, 11, 15], 9));

module.exports = twoSum;
