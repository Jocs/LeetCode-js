/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 *
 * https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * algorithms
 * Medium (36.87%)
 * Likes:    194
 * Dislikes: 0
 * Total Accepted:    30.6K
 * Total Submissions: 81.4K
 * Testcase Example:  '[5,7,7,8,8,10]\n8'
 *
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 * 
 * 你的算法时间复杂度必须是 O(log n) 级别。
 * 
 * 如果数组中不存在目标值，返回 [-1, -1]。
 * 
 * 示例 1:
 * 
 * 输入: nums = [5,7,7,8,8,10], target = 8
 * 输出: [3,4]
 * 
 * 示例 2:
 * 
 * 输入: nums = [5,7,7,8,8,10], target = 6
 * 输出: [-1,-1]
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  const len = nums.length
  let left = 0
  let right = len - 1
  let index = -1
  while (left <= right) {
    const middle = Math.floor((left + right) / 2)
    const midNum = nums[middle]
    if (target > midNum) {
      left = middle + 1
    } else if (target < midNum) {
      right = middle - 1
    } else {
      index = middle
      break
    }
  }

  if (index === -1) {
    return [-1, -1]
  }

  const num = nums[index]
  let i = index
  let j = index
  while (i >= 0 && nums[i] === num) {i--}
  while (j < len && nums[j] === num) {j++}
  
  return [++i, --j]
}

