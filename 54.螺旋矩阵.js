/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 *
 * https://leetcode-cn.com/problems/spiral-matrix/description/
 *
 * algorithms
 * Medium (41.17%)
 * Likes:    744
 * Dislikes: 0
 * Total Accepted:    144.4K
 * Total Submissions: 310.5K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[1,2,3,6,9,8,7,4,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 * 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == matrix.length
 * n == matrix[i].length
 * 1 
 * -100 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let m = matrix.length
  let n = matrix[0].length
  const mem = [...new Array(m)].map(() => [...new Array(n)].fill(true))
  const result = []
  let i = 0
  let j = 0
  let arrow = 'right'
  result.push(matrix[i][j])
  mem[i][j] = false

  while (result.length < m * n) {
    if (arrow === 'right') {
      if (j < n - 1 && mem[i][j + 1]) {
        j++
        result.push(matrix[i][j])
        mem[i][j] = false
      } else {
        arrow = 'down'
      }
    } else if (arrow === 'down') {
      if (i < m - 1 && mem[i + 1][j]) {
        i++
        result.push(matrix[i][j])
        mem[i][j] = false
      } else {
        arrow = 'left'
      }
    } else if (arrow === 'left') {
      if (j > 0 && mem[i][j - 1]) {
        j--
        result.push(matrix[i][j])
        mem[i][j] = false
      } else {
        arrow = 'up'
      }
    } else if (arrow === 'up') {
      if (i > 0 && mem[i - 1][j]) {
        i--
        result.push(matrix[i][j])
        mem[i][j] = false
      } else {
        arrow = 'right'
      }
    }
  }

  return result
};
// @lc code=end

