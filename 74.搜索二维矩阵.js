/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 *
 * https://leetcode-cn.com/problems/search-a-2d-matrix/description/
 *
 * algorithms
 * Medium (35.32%)
 * Likes:    69
 * Dislikes: 0
 * Total Accepted:    12.2K
 * Total Submissions: 34.4K
 * Testcase Example:  '[[1,3,5,7],[10,11,16,20],[23,30,34,50]]\n3'
 *
 * 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：
 * 
 * 
 * 每行中的整数从左到右按升序排列。
 * 每行的第一个整数大于前一行的最后一个整数。
 * 
 * 
 * 示例 1:
 * 
 * 输入:
 * matrix = [
 * ⁠ [1,   3,  5,  7],
 * ⁠ [10, 11, 16, 20],
 * ⁠ [23, 30, 34, 50]
 * ]
 * target = 3
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * matrix = [
 * ⁠ [1,   3,  5,  7],
 * ⁠ [10, 11, 16, 20],
 * ⁠ [23, 30, 34, 50]
 * ]
 * target = 13
 * 输出: false
 * 
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (matrix.length === 0) return false
  const rows = matrix.length
  const colunm = matrix[0].length

  let left = 0
  let right = rows - 1

  while (left <= right) {
    const middle = (left + right) >> 1
    if (target < matrix[middle][0]) {
      right = middle - 1
    } else if (target > matrix[middle][colunm - 1]) {
      left = middle + 1
    } else {
      return matrix[middle].includes(target)
    }
  }

  return false
}

