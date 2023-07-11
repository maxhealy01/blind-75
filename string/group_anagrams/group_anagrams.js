// Given an array of strings, group the anagrams together. Return the answer in any order.
// Note: A word cannot be an anagram of itself.
/**
 * @param {string[]} strings An array of strings
 * @return {string[][]} An array of string arrays, grouped according to whether they contain the same characters
 */
const groupAnagrams = (strings) => {
	const groups = {};

	strings.forEach((word) => {
		const sortedString = word.split("").sort().join("");
		if (groups[sortedString]) {
			groups[sortedString].push(word);
		} else {
			groups[sortedString] = [word];
		}
	});

	return Object.values(groups).filter((group) => group.length > 1);
};

module.exports = groupAnagrams;
