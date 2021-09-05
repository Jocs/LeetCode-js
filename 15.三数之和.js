/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (32.83%)
 * Likes:    3595
 * Dislikes: 0
 * Total Accepted:    590K
 * Total Submissions: 1.8M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0
 * 且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [0]
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * -10^5 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const result = []
  if (nums.length < 3)
    return result
  
  const set = new Set()
  const len = nums.length
  const sortedNums = nums.sort()
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = len - 1; k > j; k--) {
        if (sortedNums[i] + sortedNums[j] + sortedNums[k] === 0) {
          const str = [sortedNums[i], sortedNums[j], sortedNums[k]].sort().toString()
          if (!set.has(str)) {
            result.push([sortedNums[i], sortedNums[j], sortedNums[k]])
            set.add(str)
          }
          break
        }
      }
    }
  }

  return result
};
// @lc code=end

