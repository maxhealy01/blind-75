/**
 * @param {string} str
 * @return {number}
 */

// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
// Letters are case sensitive.
const longestPalindrome = (str) => {
	let answer = 0;
	let keys = {};

	for (let char of str) {
		keys[char] ? keys[char]++ : (keys[char] = 1);
		if (keys[char] % 2 == 0) answer += 2;
	}
	// The only time this would be true is if the map contains an odd #
	// Therefore, add the middle value if so
	return str.length > answer ? answer + 1 : answer;
};

module.exports = longestPalindrome;
