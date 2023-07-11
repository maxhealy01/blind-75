const isSubsequence = require("./is_subsequence");

describe("is_subsequence", () => {
	test("returns true if first is a subsequence of second", () => {
		expect(isSubsequence("abc", "ahbgdc")).toBe(true);
	});

	test("returns false if it isn't", () => {
		expect(isSubsequence("axc", "ahbgdc")).toBe(false);
	});

	test("returns true if the strings are the same", () => {
		expect(isSubsequence("abcd", "abcd")).toBe(true);
	});
});
