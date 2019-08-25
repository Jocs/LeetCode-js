/*
 * @lc app=leetcode.cn id=378 lang=javascript
 *
 * [378] 有序矩阵中第K小的元素
 *
 * https://leetcode-cn.com/problems/kth-smallest-element-in-a-sorted-matrix/description/
 *
 * algorithms
 * Medium (55.79%)
 * Likes:    74
 * Dislikes: 0
 * Total Accepted:    5.7K
 * Total Submissions: 10.3K
 * Testcase Example:  '[[1,5,9],[10,11,13],[12,13,15]]\n8'
 *
 * 给定一个 n x n 矩阵，其中每行和每列元素均按升序排序，找到矩阵中第k小的元素。
 * 请注意，它是排序后的第k小元素，而不是第k个元素。
 * 
 * 示例:
 * 
 * 
 * matrix = [
 * ⁠  [ 1,  5,  9],
 * ⁠  [10, 11, 13],
 * ⁠  [12, 13, 15]
 * ],
 * k = 8,
 * 
 * 返回 13。
 * 
 * 
 * 说明: 
 * 你可以假设 k 的值永远是有效的, 1 ≤ k ≤ n^2 。
 * 
 */
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  const arr = []
  matrix.forEach(row => row.forEach(i => arr.push(i)))
  return arr.sort((a, b) => a > b ? 1 : -1)[k - 1]
}

