/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 *
 * https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/description/
 *
 * algorithms
 * Easy (49.11%)
 * Likes:    151
 * Dislikes: 0
 * Total Accepted:    31K
 * Total Submissions: 62.8K
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
 * 
 * 函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。
 * 
 * 说明:
 * 
 * 
 * 返回的下标值（index1 和 index2）不是从零开始的。
 * 你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
 * 
 * 
 * 示例:
 * 
 * 输入: numbers = [2, 7, 11, 15], target = 9
 * 输出: [1,2]
 * 解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
 * 
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  const len = numbers.length
  let i
  let left
  let right
  let num
  let middle
  let midNum
  let sum

  for (i = 0; i < len - 1; i++) {
    num = numbers[i]
    left = i + 1
    right = len - 1

    while (left <= right) {
      middle = (left + right) >> 1
      midNum = numbers[middle]
      sum = num + midNum
      if (sum > target) {
        right = middle - 1
      } else if (sum < target) {
        left = middle + 1
      } else {
        return [i + 1, middle + 1]
      }
    }
  }
}

