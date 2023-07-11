const findAllAnagrams = require("./find_all_anagrams");

describe("find_all_anagrams", () => {
	test("return an empty array if short > long", () => {
		expect(findAllAnagrams("oh", "fine")).toEqual([]);
	});

	test("return starting index if they contain the same characters", () => {
		expect(findAllAnagrams("job", "boj")).toEqual([0]);
	});

	test("find all anagrams of a short string in a longer string", () => {
		expect(findAllAnagrams("abcdbc", "bcd")).toEqual([1, 2, 3]);
		expect(findAllAnagrams("abcdbqqbcd", "bcd")).toEqual([1, 2, 7]);
	});
});
