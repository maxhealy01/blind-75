// This function accepts a string and determines whether it's a valid arrangement of parentheses, brackets and curly braces
// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
/**
 * @param {string} str
 * @return {boolean}
 */
const isValidParentheses = (str) => {
	const stack = [];

	for (let i = 0; i < str.length; i++) {
		const char = str.charAt(i);
		// We're building a mirror structure, so '({[' will create a stack of ']})'
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
