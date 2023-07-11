//Given a string s, find the length of the longest substring without repeating characters.
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
	if (s.length < 2) return s.length;

	let start = 0;
	let longest = 1;
	const lastSeen = new Map();

	for (let current = 0; current < s.length; current++) {
		const currentLetter = s[current];

		const seen = lastSeen.get(currentLetter);
		if (seen && seen >= start) {
			start = seen + 1;
		}

		const currentLength = current - start + 1;
		longest = Math.max(longest, currentLength);

		lastSeen.set(currentLetter, current);
	}

	return longest;
};

module.exports = lengthOfLongestSubstring;
