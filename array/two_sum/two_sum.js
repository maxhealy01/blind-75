// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// Assume that each input would have exactly one solution, and you may not use the same element twice.

// Return the answer in any order.
/**
 * @param {number[]} nums An array of numbers
 * @param {number} target	The integer to add up to
 * @return {number[]} The numbers that add up to target
 */
const twoSum = (nums, target) => {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (map.has(complement)) {
      return [map.get(complement), i]
    }
    map.set(nums[i], i)
  }
  return []
}

module.exports = twoSum
