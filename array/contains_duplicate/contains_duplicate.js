// Return true if an array contains a duplicate, false if it doesn't.
/**
 * @param {T[]} arr An array
 * @return {boolean}
 */
const containsDuplicate = (arr) => {
  const set = new Set(arr)

  return set.size !== arr.length
}

module.exports = containsDuplicate
