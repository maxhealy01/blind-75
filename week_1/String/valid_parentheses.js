/**
 * @param {string} s
 * @return {boolean}
 */

// This function accepts a string and determines whether it's
// a valid arrangement of parentheses, brackets and curly braces

// This version of the algorithm functions irrespective of the distance
// between opening and closing brackets.
var isValidParentheses = function (string) {
	// If the string's length is odd, it can't be valid
	if (string.length % 2 != 0) return false;

	const map = {};

	for (i = 0; i < string.length; i++) {
		// If it's one of the openers, initialize or iterate the map key
		switch (string[i]) {
			case "(":
				map["("] ? map["("]++ : (map["("] = 1);
				break;
			case ")":
				if (map["("]) {
					map["("]--;
				} else {
					return false;
				}
				break;
			case "[":
				map["["] ? map["["]++ : (map["["] = 1);
				break;
			case "]":
				if (map["["]) {
					map["["]--;
				} else {
					return false;
				}
				break;
			case "{":
				map["{"] ? map["{"]++ : (map["{"] = 1);
				break;
			case "}":
				if (map["{"]) {
					map["{"]--;
				} else {
					return false;
				}
				break;
		}
	}

	let sum = 0;

	Object.keys(map).forEach((key) => {
		sum += map[key];
	});
	return sum === 0;
};

console.log(isValidParentheses("(([(){[]))]}"));
