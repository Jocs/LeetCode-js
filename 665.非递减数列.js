/*
 * @lc app=leetcode.cn id=665 lang=javascript
 *
 * [665] 非递减数列
 *
 * https://leetcode-cn.com/problems/non-decreasing-array/description/
 *
 * algorithms
 * Easy (20.10%)
 * Likes:    157
 * Dislikes: 0
 * Total Accepted:    6.6K
 * Total Submissions: 32.5K
 * Testcase Example:  '[4,2,3]'
 *
 * 给定一个长度为 n 的整数数组，你的任务是判断在最多改变 1 个元素的情况下，该数组能否变成一个非递减数列。
 * 
 * 我们是这样定义一个非递减数列的： 对于数组中所有的 i (1 <= i < n)，满足 array[i] <= array[i + 1]。
 * 
 * 示例 1:
 * 
 * 
 * 输入: [4,2,3]
 * 输出: True
 * 解释: 你可以通过把第一个4变成1来使得它成为一个非递减数列。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: [4,2,1]
 * 输出: False
 * 解释: 你不能在只改变一个元素的情况下将其变为非递减数列。
 * 
 * 
 * 说明:  n 的范围为 [1, 10,000]。
 * 
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  if (nums.length < 2) return true
  let change = 0
  const len = nums.length
  let i
  for (i = 0; i < len; i++) {
    const pre = nums[i - 1]
    const next = nums[i + 1]
    const num = nums[i]
    if (pre === undefined) {
      if (num > next) {
        change++
        nums[i] = next
      }
    } else if (next === undefined) {
      if (num < pre) {
        change++
        nums[i] = pre
      }
    } else {
      if (num > next && num < pre || pre > next) {
        return false
      } else if (num > next || num < pre) {
        change++
        if (num > next) {
          nums[i] = next
        } else {
          nums[i] = pre
        }
      } else {
        continue
      }
    }

    if (change > 1) {
      return false
    }
  }

  return true
};

