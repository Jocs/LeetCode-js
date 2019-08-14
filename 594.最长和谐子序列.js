/*
 * @lc app=leetcode.cn id=594 lang=javascript
 *
 * [594] 最长和谐子序列
 *
 * https://leetcode-cn.com/problems/longest-harmonious-subsequence/description/
 *
 * algorithms
 * Easy (41.37%)
 * Likes:    53
 * Dislikes: 0
 * Total Accepted:    3.7K
 * Total Submissions: 9K
 * Testcase Example:  '[1,3,2,2,5,2,3,7]'
 *
 * 和谐数组是指一个数组里元素的最大值和最小值之间的差别正好是1。
 * 
 * 现在，给定一个整数数组，你需要在所有可能的子序列中找到最长的和谐子序列的长度。
 * 
 * 示例 1:
 * 
 * 
 * 输入: [1,3,2,2,5,2,3,7]
 * 输出: 5
 * 原因: 最长的和谐数组是：[3,2,2,2,3].
 * 
 * 
 * 说明: 输入的数组长度最大不超过20,000.
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  const sortedNums = nums.sort((a, b) => a > b ? 1 : -1)
  let result = 0

  const len = sortedNums.length
  let i
  const stack = []
  for (i = 0; i < len; i++) {
    const item = sortedNums[i]
    stack.push(item)
    while (stack[stack.length - 1] - stack[0] > 1) {
      stack.shift()
    }
    if (stack.length > result && stack[stack.length - 1] - stack[0] === 1) {
      result = stack.length
    }
  }

  return result
};

