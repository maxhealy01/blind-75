// /**
//  * @param {string} s
//  * @return {boolean}
//  */

// // This function accepts a string and determines whether it's
// // a valid arrangement of parentheses, brackets and curly braces
const isValidParentheses = (str) => {
	const stack = [];

	for (let i = 0; i < str.length; i++) {
		let char = str.charAt(i);
		// We're building a mirror structure, so '({[' will create a stack of ']})'
		// which will then be validated in the default case.
		switch (char) {
			case "(":
				stack.push(")");
				break;
			case "[":
				stack.push("]");
				break;
			case "{":
				stack.push("}");
				break;
			default:
				if (char !== stack.pop()) {
					return false;
				}
		}
	}

	return stack.length === 0;
};

module.exports = isValidParentheses;
