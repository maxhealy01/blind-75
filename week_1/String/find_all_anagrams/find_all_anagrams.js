// Given two strings long and short, return an array of all the start indices of short's anagrams in long. You may return the answer in any order.
/**
 * @param {string} long A longer string
 * @param {string} short A shorter string
 * @return {number[]}
 */

const findAllAnagrams = (long, short) => {
	if (long.length < short.length) return [];

	const indices = [];
	// Create a Map that will contain all the values of the shorter string
	const shortMap = new Map();
	for (char of short) {
		shortMap.set(char, shortMap.get(char) + 1 || 1);
	}
	console.log(shortMap);

	// Build up a map of equal length from the beginning of the longer string
	const longMap = new Map();
	for (let i = 0; i < short.length; i++) {
		let char = long[i];
		longMap.set(char, longMap.get(char) + 1 || 1);
	}

	// Then, if they're the same, add 0 to the array of indices.
	// To me, it's more intuitive to do this in reverse, because if one value is unequal, it doesn't work,
	// and it's easier to remove on the conditional in a loop.
	let startingIndex = 0;
	indices.push(startingIndex);
	for (let [key, value] of shortMap) {
		if (longMap.get(key) !== value) {
			indices.pop();
			break;
		}
	}

	// Start the loop on the letter following the last letter used (which is at the index of the length of the shorter string)
	for (let i = short.length; i < long.length; i++) {
		// First, we remove the character at the starting index
		let firstLetter = long[startingIndex];

		longMap.set(firstLetter, longMap.get(firstLetter) - 1);
		if (longMap.get(firstLetter) === 0) longMap.delete(firstLetter);
		// Then we increment the starting index
		startingIndex++;

		// Add the character to the map
		let char = long[i];
		longMap.set(char, longMap.get(char) + 1 || 1);

		// If this key-value pair is in short, we can compare the maps
		if (shortMap.get(char) == longMap.get(char)) {
			indices.push(startingIndex);
			for (let [key, value] of shortMap) {
				if (longMap.get(key) !== value) {
					indices.pop();
					break;
				}
			}
		}
	}

	return indices;
};

module.exports = findAllAnagrams;
