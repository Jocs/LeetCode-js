/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 *
 * https://leetcode-cn.com/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (44.50%)
 * Likes:    266
 * Dislikes: 0
 * Total Accepted:    54.4K
 * Total Submissions: 121.9K
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。
 * 
 * 说明:
 * 
 * 
 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
 * 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 * 
 * 
 * 示例:
 * 
 * 输入:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 * 
 * 输出: [1,2,2,3,5,6]
 * 
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  const num3 = [...nums1.slice(0, m)]
  const num4 = [...nums2.slice(0, n)]
  nums1.length = 0
  while (num3.length || num4.length) {
    if (typeof num3[0] === 'number' && typeof num4[0] === 'number') {
      if (num3[0] <= num4[0]) {
        nums1.push(num3.shift())
      } else {
        nums1.push(num4.shift())
      }
    } else {
      const n3 = num3.shift()
      nums1.push(typeof n3 !== 'number' ? num4.shift() : n3)
    }
  }

  return nums1
};

