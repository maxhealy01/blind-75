// Given a string str, return true if it is a palindrome, or false otherwise.
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.
/**
 * @param {string} str
 * @return {boolean}
 */
const isPalindrome = (str) => {
  // Eliminate non-alphanumeric chars
  str = str.replace(/[^a-z0-9]/gi, "").toLowerCase()

  for (i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }

  return true
}

module.exports = isPalindrome
