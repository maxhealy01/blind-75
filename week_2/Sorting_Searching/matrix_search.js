const searchMatrix = (matrix, target) => {
	let sideLen = matrix[0].length - 1;
	let left = 0;
	let right = matrix.length - 1;

	while (right >= left) {
		let mid = Math.floor((right + left) / 2);
		if (matrix[mid][0] <= target <= matrix[mid][sideLen]) {
			return matrix[mid];
		} else if (matrix[mid][0] > target) {
			right = mid - 1;
		} else if (matrix[mid][sideLen] < target) {
			left = mid + 1;
		}
	}
};
// while (left <= right) {
// 	let mid = Math.floor((right + left) / 2);
// 	if (nums[mid] == target) {
// 		return mid;
// 	} else if (nums[mid] < target) {
// 		left = mid + 1;
// 	} else {
// 		right = mid - 1;
// 	}
// }
console.log(
	searchMatrix(
		[
			[1, 3, 5, 7],
			[10, 11, 16, 20],
			[23, 30, 34, 60],
		],
		3
	)
);
