// Given an integer array nums, find the subarray with the largest sum, and return its sum.
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubarray = (nums) => {
  let prev = 0
  let max = -Infinity

  for (let i = 0; i < nums.length; i++) {
    prev = Math.max(prev + nums[i], nums[i])
    max = Math.max(max, prev)
  }
  return max
}

module.exports = maxSubarray
