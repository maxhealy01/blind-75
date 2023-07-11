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

	for (let end = 0; end < s.length; end++) {
		const currentLetter = s[end];

		// If the current letter has previously been seen, move the start index up to one letter ahead of the last seen index
		if (lastSeen.has(currentLetter) && lastSeen.get(currentLetter) >= start) {
			start = lastSeen.get(currentLetter) + 1;
		}

		// We add 1 to length because end - start is the distance between those values and doesn't include the current value
		const currentLength = end - start + 1;
		// We then compare the currentLength with the longest recorded length so far
		longest = Math.max(longest, currentLength);

		// Finally, we set the last seen index of the current letter in our hash map
		lastSeen.set(currentLetter, end);
	}

	return longest;
};

module.exports = lengthOfLongestSubstring;
