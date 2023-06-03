var search = function (nums, target) {
	let offset = 0;
	let newNums = nums;

	// if (nums.length == 1) {
	// 	return nums[0] == target ? 0 : -1;
	// }

	for (let i = 0; i < nums.length - 1; i++) {
		// Find the point at which the array was rotated
		if (nums[i] > nums[i + 1]) {
			// Store an offset value to remember the index after sorting the array
			offset = i + 1;
			newNums = nums.slice(i + 1, nums.length).concat(nums.slice(0, i + 1));
			console.log(offset, newNums, nums[i]);
			break;
		}
	}

	// Then proceed with binary search as normal
	let left = 0;
	let right = nums.length - 1;

	while (left <= right) {
		let mid = Math.floor((right + left) / 2);
		if (newNums[mid] == target) {
			return mid + offset;
		} else if (newNums[mid] < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}

	return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
