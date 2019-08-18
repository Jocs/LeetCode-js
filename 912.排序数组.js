/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 *
 * https://leetcode-cn.com/problems/sort-an-array/description/
 *
 * algorithms
 * Medium (53.03%)
 * Likes:    11
 * Dislikes: 0
 * Total Accepted:    3.7K
 * Total Submissions: 7K
 * Testcase Example:  '[5,2,3,1]'
 *
 * 给定一个整数数组 nums，将该数组升序排列。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：[5,2,3,1]
 * 输出：[1,2,3,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：[5,1,1,2,0,0]
 * 输出：[0,0,1,1,2,5]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= A.length <= 10000
 * -50000 <= A[i] <= 50000
 * 
 * 
 */
const partition = nums => {
  const len = nums.length
  let i = 1
  let j = len - 1
  const num = nums[0]
  let leftStop = false
  let rightStop = false
  while (i < len && i <= j) {
    const numI = nums[i]
    const numJ = nums[j]
    if (numI <= num) {
      i++
    } else {
      leftStop = true
    }

    if (numJ >= num) {
      j--
    } else {
      rightStop = true
    }

    if (leftStop && rightStop) {
      const temp = nums[j]
      nums[j] = nums[i]
      nums[i] = temp
      leftStop = false
      rightStop = false
      i++
      j--
    }
  }
  const temp = nums[j]
  nums[j] = num
  nums[0] = temp
  return j
}
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  const len = nums.length
  if (len <= 1) return nums
  const i = partition(nums)

  return [
    ...sortArray(nums.slice(0, i)),
    nums[i],
    ...sortArray(nums.slice(i + 1))
  ]
}

