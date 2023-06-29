const { max_profit, maxProfit } = require("../Array/buy_stock");
const containsDuplicate = require("../Array/contains_duplicate");
const maxSubArray = require("../Array/max_subarray");
const twoSum = require("../Array/two_sum");
const majorityElement = require("../Array/majority_element");
const mergeSortedArrays = require("../Array/merge_two_sorted_lists");
const countUniqueValues = require("../Array/count_unique_values");
const maxSubarraySum = require("../Array/max_subarray_sum");
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

test("majority_element works", () => {
	expect(majorityElement([3, 2, 3])).toBe(3);
});

test("merge_two_sorted_lists works", () => {
	expect(mergeSortedArrays([1, 4, 6, 7, 9], [1, 3, 5, 5, 7, 8, 9, 20])).toEqual(
		[1, 1, 3, 4, 5, 5, 6, 7, 7, 8, 9, 9, 20]
	);
});

test("count_unique_values works", () => {
	expect(countUniqueValues([[1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]])).toEqual(7);
});

test("max_subarray_sum works", () => {
	expect(
		maxSubarraySum(
			[
				10, 5, 3, 7, 300, 2, 123, 10, 234, 8, 234, 7, 45, 87, 54, 78, 34, 23, 1,
				5, 4,
			],
			3
		)
	).toBe(476);
});

test("move_zeroes works", () => {
	let nums = [1, 0, 1, 5, 7, 6, 0, 1, 3, 5];
	moveZeroes(nums);
	expect(nums).toEqual([1, 1, 5, 7, 6, 1, 3, 5, 0, 0]);
});
