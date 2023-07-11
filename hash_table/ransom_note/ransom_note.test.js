const canConstruct = require("./ransom_note")

describe("ransom_note", () => {
  test("can construct", () => {
    expect(canConstruct("abc", "abcd")).toBe(true)
  })

  test("ransom note is not subsequence", () => {
    expect(canConstruct("abcd", "ionaoihboijcoihd")).toBe(true)
  })
  test("can't construct", () => {
    expect(canConstruct("abf", "abcd")).toBe(false)
  })

  test("ransom note is longer than magazine", () => {
    expect(canConstruct("abcde", "abcd")).toBe(false)
  })
})
