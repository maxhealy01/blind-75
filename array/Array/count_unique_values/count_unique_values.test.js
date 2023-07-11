const countUniqueValues = require("./count_unique_values");

describe("count_unique_values", () => {
	test("works on array with all unique values", () => {
		expect(countUniqueValues([1, 2, 3, 4, 5, 6, 7, 8])).toBe(8);
	});

	test("works on array with some duplicates", () => {
		expect(countUniqueValues([1, 2, 2, 3, 4, 5, 6, 7])).toBe(7);
	});

	test("works on empty array", () => {
		expect(countUniqueValues([])).toBe(0);
	});
});
