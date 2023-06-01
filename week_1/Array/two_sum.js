var twoSum = function (nums, target) {
	for (i = 0; i < nums.length; i++) {
		let pal = target - nums[i];
		let isPal = (element) => element === pal;
		let palIndex = nums.findIndex(isPal);
		if (palIndex > -1) {
			console.log(i, palIndex);
		}
	}
};

twoSum([2, 7, 11, 15], 9);
