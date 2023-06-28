/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (words) => {
	let longest_common_prefix = "";
	outer: for (letter = 0; letter < words[0].length; letter++) {
		for (word = 1; word < words.length; word++) {
			if (words[word][letter] !== words[0][letter]) {
				break outer;
			}
		}
		longest_common_prefix = words[0].slice(0, letter + 1);
	}
	return longest_common_prefix;
};

module.exports = longestCommonPrefix;
