const moveZeroes = require("./move_zeroes");

test("move_zeroes works", () => {
	let nums = [0, 10, 0, 2, 3, 4, 0, 5, 6, 7];
	moveZeroes(nums);
	expect(nums).toEqual([10, 2, 3, 4, 5, 6, 7, 0, 0, 0]);
});
