/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 *
 * https://leetcode-cn.com/problems/maximal-square/description/
 *
 * algorithms
 * Medium (37.79%)
 * Likes:    100
 * Dislikes: 0
 * Total Accepted:    7K
 * Total Submissions: 18.5K
 * Testcase Example:  '[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]'
 *
 * 在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。
 * 
 * 示例:
 * 
 * 输入: 
 * 
 * 1 0 1 0 0
 * 1 0 1 1 1
 * 1 1 1 1 1
 * 1 0 0 1 0
 * 
 * 输出: 4
 * 
 */
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  if (matrix.length === 0) return 0
  const m = matrix[0].length
  const n = matrix.length
  const cache = new Array(n).fill(0).map(_ => new Array(m).fill(0))

  cache[0][0] = +matrix[0][0]
  let i
  let j
  let result = cache[0][0]
  for (i = 1; i < m; i++) {
    const num = matrix[0][i]
    cache[0][i] = +num
    if (num === '1') {
      result = 1
    }
  }

  for (i = 1; i < n; i++) {
    const num = matrix[i][0]
    cache[i][0] = +num
    if (num === '1') {
      result = 1
    }
  }

  for (i = 1; i < n; i++) {
    for (j = 1; j < m; j++) {
      if (matrix[i][j] === '1') {
        cache[i][j] = Math.min(
          cache[i - 1][j - 1],
          cache[i][j - 1],
          cache[i - 1][j]
        ) + 1
      }
      result = Math.max(result, cache[i][j])
    }
  }

  return result * result
}

