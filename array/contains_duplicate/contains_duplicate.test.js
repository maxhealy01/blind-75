const containsDuplicate = require("./contains_duplicate");

describe("contains_duplicate", () => {
	test("works with numbers", () => {
		expect(containsDuplicate([2, 5, 7, 8, 9])).toBe(false);
		expect(containsDuplicate([2, 3, 6, 8, 1, 2])).toBe(true);
	});

	test("works with strings", () => {
		expect(
			containsDuplicate(["John", "Ralph", "yellow", "Ramen", "Ramone"])
		).toBe(false);
		expect(
			containsDuplicate(["John", "Ralph", "Ramen", "Ramen", "Ramone"])
		).toBe(true);
	});

	test("works with mixed array", () => {
		expect(containsDuplicate(["Miguel", 85, true])).toBe(false);
		expect(containsDuplicate(["Miguel", 85, true, true])).toBe(true);
	});
});
