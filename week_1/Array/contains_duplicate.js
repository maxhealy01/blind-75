// Return true if an array contains a duplicate, false if it doesn't.
const containsDuplicate = (arr) => {
	const map = {};
	arr.forEach((item) => {
		if (map[item]) {
			return true;
		} else {
			map[item] = 1;
		}
	});
	return false;
};

console.log(containsDuplicate([2, 3, 6, 8, 1, 2]));
module.exports = containsDuplicate;
