// Given a string s, find the length of the longest substring without repeating characters.
const lengthOfLongestSubstring = (str) => {
	let maxLength = 1;
	const map = {};
	let left = 0;
	map[str[left]] = 1;
	if (str.length == 0) return 0;

	for (let right = 1; right < str.length; right++) {
		// Create the map one step at a time
		// if the key exists, move the window left and remove each element from the map
		if (map[str[right]]) {
			// Shrink that window until there aren't anymore duplicates
			while (map[str[right]] > 1) {
				map[str[left]]--;
				// We're checking and not outright deleting here because the left and rightmost values might be the same
				if (map[str[left]] == 0) {
					delete map[str[left]];
				}
				left++;
			}
		} else {
			// if it doesn't, create it
			map[str[right]] = right;
		}
		// # of map keys = # of substring elements
		// if that's > current maxLength, it supplants it
		maxLength = Math.max(maxLength, Object.keys(map).length);
	}
	return maxLength;
};

module.exports = lengthOfLongestSubstring;
console.log(lengthOfLongestSubstring("abcdasddades"));
