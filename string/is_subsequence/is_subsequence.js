// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.
/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
const isSubsequence = (first, second) => {
  // Create a pointer for the first string
  let p1 = 0

  for (let p2 = 0; p2 < second.length; p2++) {
    if (first[p1] === second[p2]) {
      p1++
    }
    if (p1 === first.length) {
      return true
    }
  }

  return false
}

module.exports = isSubsequence
