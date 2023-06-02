const maxProduct = (nums) => {
	let maxProduct = -Infinity;

	if (nums.length < 2) {
		return nums[0];
	}
	for (let i = 1; i < nums.length; i++) {
		let product = nums[i] * nums[i - 1];

		maxProduct = Math.max(maxProduct, product, nums[i]);
	}

	return maxProduct;
};

console.log(maxProduct([0, 0, -2, 2]));
