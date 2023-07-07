const groupAnagrams = require("./group_anagrams");

describe("group_anagrams", () => {
	test("works with one string", () => {
		expect(groupAnagrams(["hey"])).toEqual([["hey"]]);
	});

	test("works with two anagrams", () => {
		expect(groupAnagrams(["aloha", "ahalo"])).toEqual([["aloha", "ahalo"]]);
	});

	test("works with two non-anagrams", () => {
		expect(groupAnagrams(["fine", "jerk"])).toEqual([["fine"], ["jerk"]]);
	});

	test("works with larger data set", () => {
		expect(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])).toEqual([
			["eat", "tea", "ate"],
			["tan", "nat"],
			["bat"],
		]);
	});
});
