// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
  if (magazine.length < ransomNote.length) return false

  const map = {}

  for (char of magazine) {
    map[char] ? map[char]++ : (map[char] = 1)
  }

  for (char of ransomNote) {
    if (map[char] > 0) map[char]--
    else return false
  }

  return true
}

module.exports = canConstruct
