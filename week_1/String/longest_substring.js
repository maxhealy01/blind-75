const lengthOfLongestSubstring = (s) => {
	let maxLength = 1;
	const map = {};
	let left = 0;
	map[s[left]] = 1;
	if (s.length == 0) return 0;

	for (let r = 1; r < s.length; r++) {
		// Create the map one step at a time
		// if the key exists, move the window left and remove each element from the map
		if (map[s[r]]) {
			map[s[r]]++;
			// Shrink that window until there aren't anymore duplicates
			while (map[s[r]] > 1) {
				map[s[left]]--;
				// We're checking and not outright deleting here because the left and rightmost values might be the same
				if (map[s[left]] == 0) {
					delete map[s[left]];
				}
				left++;
			}
		} else {
			// if it doesn't, create it
			map[s[r]] = 1;
		}
		// # of map keys = # of substring elements
		// if that's > current maxLength, it supplants it
		maxLength = Math.max(maxLength, Object.keys(map).length);
	}
	return maxLength;
};

console.log(lengthOfLongestSubstring("abcddes"));
