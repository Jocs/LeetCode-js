/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 *
 * https://leetcode-cn.com/problems/kth-largest-element-in-an-array/description/
 *
 * algorithms
 * Medium (57.36%)
 * Likes:    196
 * Dislikes: 0
 * Total Accepted:    31.7K
 * Total Submissions: 55.2K
 * Testcase Example:  '[3,2,1,5,6,4]\n2'
 *
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 * 
 * 示例 1:
 * 
 * 输入: [3,2,1,5,6,4] 和 k = 2
 * 输出: 5
 * 
 * 
 * 示例 2:
 * 
 * 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
 * 输出: 4
 * 
 * 说明: 
 * 
 * 你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest1 = function(nums, k) {
  return nums.sort((a, b) => a > b ? -1 : 1)[k - 1]
}

const swap = (nums, i, j) => {
  const temp = nums[j]
  nums[j] = nums[i]
  nums[i] = temp
}

const partition = (nums, left, right) => {
  const num = nums[left]
  let i = left + 1
  let j = right

  while (i <= j) {
    while (i <= j && nums[i] <= num) {
      i++
    }
    while (i <= j && nums[j] >= num) {
      j--
    }
    if (i < j) {
      swap(nums, i, j)
    }
  }

  swap(nums, left, j)

  return j  
}

var findKthLargest = function(nums, k) {
  const len = nums.length
  let left = 0
  let right = len - 1

  while (left < right) {
    const index = partition(nums, left, right)
    if (len - index > k) {
      left = index + 1
    } else if (len - index < k) {
      right = index - 1
    } else {
      left = right = index
    }
  }
  
  return nums[left]
}
