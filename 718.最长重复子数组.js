/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 *
 * https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray/description/
 *
 * algorithms
 * Medium (56.34%)
 * Likes:    503
 * Dislikes: 0
 * Total Accepted:    73.4K
 * Total Submissions: 130.3K
 * Testcase Example:  '[1,2,3,2,1]\n[3,2,1,4,7]'
 *
 * 给两个整数数组 A 和 B ，返回两个数组中公共的、长度最长的子数组的长度。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：
 * A: [1,2,3,2,1]
 * B: [3,2,1,4,7]
 * 输出：3
 * 解释：
 * 长度最长的公共子数组是 [3, 2, 1] 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= len(A), len(B) <= 1000
 * 0 <= A[i], B[i] < 100
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
  const m = nums1.length
  const n = nums2.length
  const matrix = [...new Array(m + 1)].map(_ => [...new Array(n + 1)].fill(0))
  let res = 0

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (nums1[i] === nums2[j]) {
        matrix[i + 1][j + 1] = matrix[i][j] + 1
        res = Math.max(matrix[i + 1][j + 1], res)
      } else {
        matrix[i + 1][j + 1] = 0
      }
    }
  }

  return res
};
// @lc code=end

