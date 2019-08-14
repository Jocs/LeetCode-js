/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 *
 * https://leetcode-cn.com/problems/intersection-of-two-arrays/description/
 *
 * algorithms
 * Easy (64.09%)
 * Likes:    106
 * Dislikes: 0
 * Total Accepted:    24.7K
 * Total Submissions: 38.6K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 
 * 示例 1:
 * 
 * 输入: nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出: [2]
 * 
 * 
 * 示例 2:
 * 
 * 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出: [9,4]
 * 
 * 说明:
 * 
 * 
 * 输出结果中的每个元素一定是唯一的。
 * 我们可以不考虑输出结果的顺序。
 * 
 * 
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const result = []

  nums1 = [...new Set(nums1)]
  nums2 = [...new Set(nums2)]

  const sortedArr = [...nums1, ...nums2].sort((a, b) => a > b ? 1 : -1)

  const len = sortedArr.length

  let i
  for (i = 0; i < len - 1; i++) {
    const num = sortedArr[i]
    const next = sortedArr[i + 1]
    if (num === next) {
      result.push(num)
      i++
    }
  }

  return result
};

