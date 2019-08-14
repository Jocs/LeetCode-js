/*
 * @lc app=leetcode.cn id=643 lang=javascript
 *
 * [643] 子数组最大平均数 I
 *
 * https://leetcode-cn.com/problems/maximum-average-subarray-i/description/
 *
 * algorithms
 * Easy (34.80%)
 * Likes:    51
 * Dislikes: 0
 * Total Accepted:    5.5K
 * Total Submissions: 15.6K
 * Testcase Example:  '[1,12,-5,-6,50,3]\n4'
 *
 * 给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。
 * 
 * 示例 1:
 * 
 * 输入: [1,12,-5,-6,50,3], k = 4
 * 输出: 12.75
 * 解释: 最大平均数 (12-5-6+50)/4 = 51/4 = 12.75
 * 
 * 
 * 
 * 
 * 注意:
 * 
 * 
 * 1 <= k <= n <= 30,000。
 * 所给数据范围 [-10,000，10,000]。
 * 
 * 
 */
const sum = (nums, from, to) => {
  let result = 0
  let i

  for (i = from; i < to; i++) {
    result += nums[i]
  }

  return result
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  const len = nums.length
  let i
  let result = -Infinity
  let count = 0

  for (i = 0; i <= len - k; i++) {
    count = sum(nums, i, i + k)
    if (count > result) {
      result = count
    }
  }

  return result / k
};

