const { max_profit, maxProfit } = require("../Array/buy_stock");
const containsDuplicate = require("../Array/contains_duplicate");
const maxSubArray = require("../Array/max_subarray");
const twoSum = require("../Array/two_sum");
const moveZeroes = require("../Array/move_zeroes");

test("buy_stock works", () => {
	expect(max_profit([7, 1, 5, 3, 8, 4])).toBe(7);

	expect(maxProfit([7, 1, 5, 2, 3, 6, 7, 8, 2, 3, 5, 6, 7, 9, 10])).toBe(9);
	expect(maxProfit([10, 9, 8, 6, 4, 3, 1, 0])).toBe(0);
});

test("contains_duplicate works", () => {
	expect(containsDuplicate([2, 5, 7, 8, 9])).toBe(false);
	expect(containsDuplicate([2, 3, 6, 8, 1, 2])).toBe(true);
	expect(
		containsDuplicate(["John", "Ralph", "yellow", "Ramen", "Ramone"])
	).toBe(false);
	expect(containsDuplicate(["John", "Ralph", "Ramen", "Ramen", "Ramone"])).toBe(
		true
	);
});

test("max_subarray works", () => {
	expect(maxSubArray([1, -2, 3, -5, 6, 7, 8, 0, 2, 55, 6, 7])).toBe(91);
});

test("two_sum works", () => {
	expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test("move_zeroes works", () => {
	let nums = [0, 10, 0, 2, 3, 4, 0, 5, 6, 7];
	moveZeroes(nums);
	expect(nums).toEqual([10, 2, 3, 4, 5, 6, 7, 0, 0, 0]);
});
