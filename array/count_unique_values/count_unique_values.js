// Given an array, count the number of unique values in the array.
/**
 * @param {[]} prices
 * @return {number} the number of unique values
 */
const countUniqueValues = (arr) => {
  const set = new Set(arr)

	return set.size;
};

module.exports = countUniqueValues;
