const longestCommonPrefix = require("./longest_common_prefix");

describe("longest_common_prefix", () => {
	test("will find prefix when all words share the same prefix", () => {
		expect(longestCommonPrefix(["flower", "flow", "flytrap"])).toBe("fl");
	});
	test("will return an empty string when the first word has a different prefix", () => {
		expect(longestCommonPrefix(["oh no!", "pies", "peanuts"])).toBe("");
	});
	test("will return an empty string when the last word has a different prefix", () => {
		expect(longestCommonPrefix(["pancakes!", "pies", "oopsies"])).toBe("");
	});
});
