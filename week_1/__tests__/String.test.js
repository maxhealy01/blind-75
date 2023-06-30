const isAnagram = require("../String/valid_anagram");
const isPalindrome = require("../String/valid_palindrome");
const romanToInt = require("../String/roman_to_int");
const {
	longest_palindrome,
	longestPalindrome,
} = require("../String/longest_palindrome");
const isValidParentheses = require("../String/valid_parentheses");
const isSubsequence = require("../String/is_subsequence");
const longestCommonPrefix = require("../String/longest_common_prefix");

test("valid_anagram works", () => {
	expect(isPalindrome("racecar")).toBe(true);
	expect(isPalindrome("racescar")).toBe(false);
	expect(isPalindrome("lineament")).toBe(false);
	expect(isPalindrome("ankaakna")).toBe(true);
});

// test("valid_palindrome works", () => {
// 	expect(max_profit([7, 1, 5, 3, 8, 4])).toBe(7);

// 	expect(maxProfit([7, 1, 5, 2, 3, 6, 7, 8, 2, 3, 5, 6, 7, 9, 10])).toBe(9);
// 	expect(maxProfit([10, 9, 8, 6, 4, 3, 1, 0])).toBe(0);
// });

test("roman_to_int works", () => {
	expect(romanToInt("V")).toBe(5);
	expect(romanToInt("MCMXCIV")).toBe(1994);
	expect(romanToInt("LVIII")).toBe(58);
});

test("longest_palindrome works", () => {
	expect(
		longest_palindrome(
			"asdfiuhlfadsioufhadslkafdjhflkadsvvnoifdshavidGOIJFDJDGKJNGDKNFKSDJFNKoshfanvosdhnlasudhfnalsukdhfnalisuhdnoisduhfnvosiduhfgnv"
		)
	).toBe(113);
	expect(
		longestPalindrome(
			"asdfiuhlfadsioufhadslkafdjhflkadsvvnoifdshavidGOIJFDJDGKJNGDKNFKSDJFNKoshfanvosdhnlasudhfnalsukdhfnalisuhdnoisduhfnvosiduhfgnv"
		)
	).toBe(113);
});

test("valid_parentheses works", () => {
	expect(isValidParentheses("([{([([{{{}}}])])}])"));
	expect(isValidParentheses("[]{}[()]()[]{}{{()}}"));
});

test("valid_anagram works", () => {
	expect(isAnagram("anagram", "nagaram")).toBe(true);
	expect(isAnagram("", "")).toBe(true);
	expect(isAnagram("awesome", "awesom")).toBe(false);
});

test("is_subsequence works", () => {
	expect(isSubsequence("tart", "trading rats")).toBe(true);
	expect(isSubsequence("mouthwash", "hsawhtuom")).toBe(false);
	expect(isSubsequence("hair", "nair")).toBe(false);
});
