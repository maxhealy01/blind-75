// // This initial solution requires a lot of string manipulation and traversal (indexOf)
// const isAnagram = (s, t) => {
// 	if (s.length !== t.length) {
// 		return false;
// 	}
// 	for (i = 0; i < s.length; i++) {
// 		let letter = s.charAt(i);
// 		// If the letter isn't there, it ain't an anagram
// 		if (!t.includes(letter)) {
// 			return false;
// 		}
// 		// If the letter is there, remove it from the string to ensure there are the same number
// 		let index = t.indexOf(letter);

// 		t = t.slice(0, index).concat(t.slice(index + 1, t.length));
// 		console.log(t);
// 	}
// 	return true;
// };

const isAnagram = (s, t) => {
	if (s.length !== t.length) return false;
	const map = {};

	for (let i = 0; i < s.length; i++) {
		// Create the map
		map[s[i]] ? map[s[i]]++ : (map[s[i]] = 1);
	}

	// The sum of all #s in map will now equal the length of s
	// The following loop works because it depends on the fact that this is a zero sum game
	// because s.len === t.len
	for (let i = 0; i < t.length; i++) {
		if (map[t[i]]) map[t[i]]--;
		else return false;
	}

	return true;
};

console.log(isAnagram("nagrama", "nagrama"));
