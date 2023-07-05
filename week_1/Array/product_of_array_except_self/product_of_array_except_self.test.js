const productExceptSelf = require("./product_of_array_except_self");

describe("product_of_array_except_self", () => {
	test("returns an array of products", () => {
		expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
	});

	test("can handle negative numbers", () => {
		expect(productExceptSelf([-1, 1, 2, -3, 3])).toEqual([-18, 18, 9, -6, 6]);
	});

	test("can handle zeroes", () => {
		expect(productExceptSelf([0, 1, 2, 3, 4])).toEqual([24, 0, 0, 0, 0]);
	});

	test("can handle zeroes and negative numbers", () => {
		expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([-0, 0, 9, -0, 0]);
	});
});
