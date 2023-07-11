const sortColors = require("./sort_colors");

describe("sort_colors", () => {
	test("modifies array in place to sort colors", () => {
		let nums = [1, 2, 0, 1, 2, 2, 1, 0];
		sortColors(nums);
		expect(nums).toEqual([0, 0, 1, 1, 1, 2, 2, 2]);
	});

	test("modifies backwards array", () => {
		let nums = [2, 1, 0];
		sortColors(nums);
		expect(nums).toEqual([0, 1, 2]);
	});

	test("array stays the same if only 0's", () => {
		let nums = [0, 0, 0, 0, 0];
		sortColors(nums);
		expect(nums).toEqual([0, 0, 0, 0, 0]);
	});

	test("array stays the same if only 1's", () => {
		let nums = [1, 1, 1, 1, 1];
		sortColors(nums);
		expect(nums).toEqual([1, 1, 1, 1, 1]);
	});

	test("array stays the same if only 2's", () => {
		let nums = [2, 2, 2, 2, 2];
		sortColors(nums);
		expect(nums).toEqual([2, 2, 2, 2, 2]);
	});
});
