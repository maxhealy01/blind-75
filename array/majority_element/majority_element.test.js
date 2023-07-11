const majorityElement = require("./majority_element");

describe("majority_element", () => {
	test("works with clear majority", () => {
		expect(majorityElement([1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 4])).toBe(1);
	});

	test("works with slight majority", () => {
		expect(majorityElement([2, 3, 4, 5, 6, 6, 6, 6, 6])).toBe(6);
	});
});
