/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 *
 * https://leetcode-cn.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (46.23%)
 * Likes:    5612
 * Dislikes: 0
 * Total Accepted:    434.6K
 * Total Submissions: 940K
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * 
 * 示例:
 * 
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const len = nums.length
  let i
  let j
  const result = []
  let breakOut = false
  for (i = 0; i < len; i++) {
    for (j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i, j)
        breakOut = true
        break
      }
    }
    if (breakOut) {
      break
    }
  }

  return result
};

