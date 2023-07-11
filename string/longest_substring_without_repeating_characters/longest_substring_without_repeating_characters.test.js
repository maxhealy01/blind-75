const lengthOfLongestSubstring = require("./longest_substring_without_repeating_characters");

describe("length_of_longest_substring", () => {
	test("returns 0 on empty string", () => {
		expect(lengthOfLongestSubstring("")).toBe(0);
	});

	test("returns 1 on string of length 1", () => {
		expect(lengthOfLongestSubstring("a")).toBe(1);
	});

	test("returns length of non-repeating string", () => {
		expect(lengthOfLongestSubstring("abcdefgh")).toBe(8);
	});

	test("returns longest substring w/o repeating characters", () => {
		expect(lengthOfLongestSubstring("123451234567")).toBe(7);
	});
});
