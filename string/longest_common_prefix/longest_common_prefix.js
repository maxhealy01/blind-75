/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 *
 * @example
 * // returns ""
 * longestCommonPrefix(["hello", "goodbye", "okay"])
 * @example
 * // returns "dog"
 * longestCommonPrefix(["dogman", "dogboy", "dogperson"])
 *
 * @param {string[]} Words that will be checked for a common prefix
 * @return {string} The longest common prefix
 */
const longestCommonPrefix = (words) => {
  let longest_common_prefix = ""
  outer: for (letter = 0; letter < words[0].length; letter++) {
    for (word = 1; word < words.length; word++) {
      if (words[word][letter] !== words[0][letter]) {
        break outer
      }
    }
    longest_common_prefix = words[0].slice(0, letter + 1)
  }
  return longest_common_prefix
}

module.exports = longestCommonPrefix
