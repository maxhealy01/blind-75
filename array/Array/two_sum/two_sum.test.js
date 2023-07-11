const twoSum = require("./two_sum");

describe("two_sum", () => {
	test("indices are at the beginning", () => {
		expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
	});

	test("indices are separated", () => {
		expect(twoSum([2, 5, 8, 9, 13, 24, 65], 21)).toEqual([2, 4]);
	});

	test("indices are at end", () => {
		expect(twoSum([1, 2, 3, 4, 5, 6, 7, 8], 15)).toEqual([6, 7]);
	});
});
