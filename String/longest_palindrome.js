/**
 * @param {string} s
 * @return {number}
 */

// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
const longest_palindrome = (str) => {
	const map = {};

	for (i = 0; i < str.length; i++) {
		map[str[i]] ? map[str[i]]++ : (map[str[i]] = 1);
	}

	// Add all even values and every odd value - 1
	const values = Object.values(map);

	let lengthOfPalindrome = 0;
	// If there are any odds, add one to the answer (this is the middle value)
	if (values.some((element) => element % 2 == 1)) {
		lengthOfPalindrome += 1;
	}
	for (i = 0; i < values.length; i++) {
		if (values[i] % 2 === 0) {
			lengthOfPalindrome += values[i];
		} else {
			lengthOfPalindrome += values[i] - 1;
		}
	}

	return lengthOfPalindrome;
};

const longestPalindrome = (str) => {
	let answer = 0;
	let keys = {};

	for (let char of str) {
		// Initialize the char if it's not there
		keys[char] = (keys[char] || 0) + 1;
		// If the current count is even, add 2 to the answer
		if (keys[char] % 2 == 0) answer += 2;
	}
	// The only time this would be true is if the map contains an odd #
	// Therefore, add the middle value if so
	return str.length > answer ? answer + 1 : answer;
};

module.exports = { longest_palindrome, longestPalindrome };
