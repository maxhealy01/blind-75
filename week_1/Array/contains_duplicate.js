const containsDuplicate = (nums) => {
	const map = {};
	for (i = 0; i < nums.length; i++) {
		if (map[nums[i]]) {
			return true;
		} else {
			map[nums[i]] = 1;
		}
	}
	return false;
};

module.exports = containsDuplicate;
