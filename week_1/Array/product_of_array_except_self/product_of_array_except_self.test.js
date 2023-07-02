const productExceptSelf = require("./product_of_array_except_self");

test("product_of_array_except_self returns an array of products", () => {
	expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
	expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([-0, 0, 9, -0, 0]);
});
