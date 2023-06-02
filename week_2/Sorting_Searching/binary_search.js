const search = (nums, target) => {
	let left = 0;
	let right = nums.length - 1;

	while (left <= right) {
		let mid = Math.floor((right + left) / 2);
		if (mid == target) {
			return mid;
		} else if (nums[mid] < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}

	return -1;
};
