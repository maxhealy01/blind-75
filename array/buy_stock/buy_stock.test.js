const maxProfit = require("./buy_stock")

test("buy_stock correctly returns the maximum profit", () => {
  expect(maxProfit([7, 1, 5, 3, 8, 4])).toBe(7)
  expect(maxProfit([7, 1, 5, 2, 3, 6, 7, 8, 2, 3, 5, 6, 7, 9, 10])).toBe(9)
  expect(maxProfit([10, 9, 8, 6, 4, 3, 1, 0])).toBe(0)
})
