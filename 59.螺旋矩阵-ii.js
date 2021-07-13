/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 *
 * https://leetcode-cn.com/problems/spiral-matrix-ii/description/
 *
 * algorithms
 * Medium (78.09%)
 * Likes:    402
 * Dislikes: 0
 * Total Accepted:    96.3K
 * Total Submissions: 120.3K
 * Testcase Example:  '3'
 *
 * 给你一个正整数 n ，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 3
 * 输出：[[1,2,3],[8,9,4],[7,6,5]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 1
 * 输出：[[1]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const result = [...new Array(n)].map((_) => [...new Array(n)].map((_) => false))
  const count = n * n
  let num = 1
  let i = 0
  let j = 0
  let arrow = 'right'
  result[i][j] = num
  num++
  while(num <= count) {
    if (arrow === 'right') {
      if (j < n - 1 && result[i][j + 1] === false) {
        j++
        result[i][j] = num
        num++
      } else {
        arrow = 'down'
      }
    } else if (arrow === 'down') {
      if (i < n - 1 && result[i + 1][j] === false) {
        i++
        result[i][j] = num
        num++
      } else {
        arrow = 'left'
      }
    } else if (arrow === 'left') {
      if (j > 0 && result[i][j - 1] === false) {
        j--
        result[i][j] = num
        num++
      } else {
        arrow = 'up'
      }
    } else if (arrow === 'up') {
      if (i > 0 && result[i - 1][j] === false) {
        i--
        result[i][j] = num
        num++
      } else {
        arrow = 'right'
      }
    }
  }

  return result
};
// @lc code=end

