/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (arr) => {
	let longest_common_prefix = "";
	outer: for (j = 0; j < arr[0].length; j++) {
		for (i = 1; i < arr.length; i++) {
			if (arr[i][j] !== arr[0][j]) {
				break outer;
			}
		}
		longest_common_prefix = arr[0].slice(0, j + 1);
	}
	return longest_common_prefix;
};

module.exports = longestCommonPrefix;
