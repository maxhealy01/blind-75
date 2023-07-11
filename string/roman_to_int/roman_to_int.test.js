const romanToInt = require("./roman_to_int")

describe("roman_to_int", () => {
  test("works with straight addition", () => {
    expect(romanToInt("III")).toBe(3)
  })

  test("works with multiple symbols", () => {
    expect(romanToInt("LVIII")).toBe(58)
  })

  test("works with subtraction", () => {
    expect(romanToInt("MCMXCIV")).toBe(1994)
  })
})
