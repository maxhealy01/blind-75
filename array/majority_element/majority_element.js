// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (arr) => {
  const map = {}

  let solution = arr[0]
  arr.forEach((item) => {
    if (map[item]) {
      map[item]++
    } else {
      map[item] = 1
    }
    if (map[item] > arr.length / 2) {
      solution = item
    }
  })

  return solution
}

module.exports = majorityElement
