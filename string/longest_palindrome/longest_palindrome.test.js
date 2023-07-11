const longestPalindrome = require("./longest_palindrome");

describe("longest_palindrome", () => {
	test("works with odd number", () => {
		expect(longestPalindrome("abccccdd")).toBe(7);
	});

	test("works with even number", () => {
		expect(longestPalindrome("aaaabbbb")).toBe(8);
	});

	test("works with string of length 1", () => {
		expect(longestPalindrome("a")).toBe(1);
	});
});
