const isPalindrome = require("./valid_palindrome")

describe("is_palindrome", () => {
  test("valid palindrome", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true)
  })

  test("invalid palindrome", () => {
    expect(isPalindrome("race a car")).toBe(false)
  })

  test("empty string", () => {
    expect(isPalindrome("   ")).toBe(true)
  })
})
