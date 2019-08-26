/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 *
 * https://leetcode-cn.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (45.87%)
 * Likes:    1036
 * Dislikes: 0
 * Total Accepted:    67.8K
 * Total Submissions: 147.7K
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 
 * 示例:
 * 
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 * 
 * 
 * 进阶:
 * 
 * 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 * 
 */
const max = (nums, left, right, direction) => {
  let i
  let maxSum = -Infinity
  let thisSum = 0 
  if (direction === 'left') {
    for (i = right; i >= left; i--) {
      const num = nums[i]
      thisSum += num
      if (thisSum > maxSum) {
        maxSum = thisSum
      }
    }
  } else {
    for (i = left; i <= right; i++) {
      const num = nums[i]
      thisSum += num
      if (thisSum > maxSum) {
        maxSum = thisSum
      }
    }
  }

  return maxSum
}

const maxSub = (nums, left, right) => {
  if (left === right) {
    return nums[left]
  } else {
    const middle = Math.floor((left + right) / 2)

    return Math.max(
      maxSub(nums, left, middle),
      max(nums, left, middle, 'left') + max(nums, middle + 1, right, 'right'),
      maxSub(nums, middle + 1, right)
    )
  }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  return maxSub(nums, 0, nums.length - 1)
}

