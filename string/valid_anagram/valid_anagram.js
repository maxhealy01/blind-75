// Given two strings, return true if they consist of the same characters and false otherwise.
/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
const isAnagram = (first, second) => {
	if (first.length !== second.length) return false;
	const map = {};

	for (let char of first) {
		// Create the map
		map[char] ? map[char]++ : (map[char] = 1);
	}

	// The sum of all #s in map will now equal the length of s
	// The following loop works because it depends on the fact that this is a zero sum game
	// because s.len === t.len
	for (let char of second) {
		if (map[char]) map[char]--;
		else return false;
	}

	return true;
};

module.exports = isAnagram;
