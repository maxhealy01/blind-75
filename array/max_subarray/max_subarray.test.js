const maxSubarray = require("./max_subarray.js")

describe("max_subarray", () => {
  test("works with positive and negative numbers", () => {
    expect(maxSubarray([1, -2, 3, -5, 6, 7, 8, 0, 2, 55, 6, 7])).toBe(91)
  })

  test("works with negative numbers", () => {
    expect(maxSubarray([-1, -2, -3, -4, -5, -6, -7])).toBe(-1)
  })
})
