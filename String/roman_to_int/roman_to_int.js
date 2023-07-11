// Given a roman numeral, convert it to an integer.
/**
 * @param {string} str
 * @return {number}
 */
const symbols = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000,
};

const romanToInt = (str) => {
	let sum = 0;
	for (i = 0; i < str.length; i++) {
		// If current symbol is less than the one that follows, it's negative and should be substracted
		if (symbols[str[i]] < symbols[str[i + 1]]) {
			sum -= symbols[str[i]];
		} else {
			sum += symbols[str[i]];
		}
	}
	return sum;
};

module.exports = romanToInt;
