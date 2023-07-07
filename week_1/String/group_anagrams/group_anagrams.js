/**
 * @param {string[]} strs An array of strings
 * @return {string[][]} An array of string arrays, grouped according to whether they contain the same characters
 */
const groupAnagrams = (strs) => {
	const groups = {};

	strs.forEach((str) => {
		// Sort the strings alphabetically
		let key = str.split("").sort().join("");
		if (groups[key]) {
			groups[key].push(str);
		} else {
			groups[key] = [str];
		}
	});

	return Object.values(groups);
};

module.exports = groupAnagrams;
