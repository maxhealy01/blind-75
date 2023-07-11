const isValidParentheses = require("./valid_parentheses")

describe("valid_parentheses", () => {
  test("works with all bracket types, side by side", () => {
    expect(isValidParentheses("()[]{}")).toBe(true)
  })

  test("works with nested brackets", () => {
    expect(isValidParentheses("([{}])")).toBe(true)
  })

  test("returns false with mismatched brackets", () => {
    expect(isValidParentheses("(]")).toBe(false)
  })
})
