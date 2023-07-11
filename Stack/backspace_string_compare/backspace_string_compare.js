// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = (s, t) => {
	// Create two arrays that will function as stacks.
	let arrS = [];
	let arrT = [];

	// Loop through the characters. If it's a backspace, remove the last character
	// If it's not, add the character
	for (let char of s) {
		if (char != "#") {
			arrS.push(char);
		} else {
			arrS.pop();
		}
	}

	for (let char of t) {
		if (char != "#") {
			arrT.push(char);
		} else {
			arrT.pop();
		}
	}

	// Return the result of comparing the two joined arrays (this prevents having to run another loop)
	return arrS.join("") === arrT.join("");
};

module.exports = backspaceCompare;
