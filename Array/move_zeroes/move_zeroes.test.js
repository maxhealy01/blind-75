const moveZeroes = require("./move_zeroes");

describe("move_zeroes", () => {
	test("moves zeroes to the end of an array of numbers while maintaining the relative order of the remaining elements", () => {
		let nums = [0, 10, 0, 2, 3, 4, 0, 5, 6, 7];
		moveZeroes(nums);
		expect(nums).toEqual([10, 2, 3, 4, 5, 6, 7, 0, 0, 0]);
	});

	test("changes nothing when there are no zeroes", () => {
		let nums = [1, 2, 3, 4, 5];
		moveZeroes(nums);
		expect(nums).toEqual([1, 2, 3, 4, 5]);
	});

	test("changes nothing when zeroes are already on the end", () => {
		let nums = [1, 2, 3, 4, 5, 0, 0, 0];
		moveZeroes(nums);
		expect(nums).toEqual([1, 2, 3, 4, 5, 0, 0, 0]);
	});
});
