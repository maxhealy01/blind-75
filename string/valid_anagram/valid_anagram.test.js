const isAnagram = require("./valid_anagram");

describe("valid_anagram", () => {
	test("valid anagram", () => {
		expect(isAnagram("anagram", "nagaram")).toBe(true);
	});
	test("invalid anagram", () => {
		expect(isAnagram("rat", "car")).toBe(false);
	});
});
