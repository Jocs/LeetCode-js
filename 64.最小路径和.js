/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 *
 * https://leetcode-cn.com/problems/minimum-path-sum/description/
 *
 * algorithms
 * Medium (61.56%)
 * Likes:    253
 * Dislikes: 0
 * Total Accepted:    24.7K
 * Total Submissions: 39.7K
 * Testcase Example:  '[[1,3,1],[1,5,1],[4,2,1]]'
 *
 * 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 * 
 * 说明：每次只能向下或者向右移动一步。
 * 
 * 示例:
 * 
 * 输入:
 * [
 * [1,3,1],
 * ⁠ [1,5,1],
 * ⁠ [4,2,1]
 * ]
 * 输出: 7
 * 解释: 因为路径 1→3→1→1→1 的总和最小。
 * 
 * 
 */
const sum = list => list.reduce((acc, i) => acc + i, 0)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const m = grid[0].length
  const n = grid.length
  const cache = new Array(n).fill(undefined).map(_ => new Array(m).fill(undefined))
  cache[0][0] = grid[0][0]
  let i
  let j
  for (i = 1; i < m; i++) {
    cache[0][i] = sum(grid[0].slice(0, i + 1))
  }

  for (i = 1; i < n; i++) {
    cache[i][0] = sum(grid.slice(0, i + 1).map(r => r[0]))
  }

  for (i = 1; i < n; i++) {
    for (j = 1; j < m; j++) {
      cache[i][j] = Math.min(cache[i - 1][j], cache[i][j - 1]) + grid[i][j]
    }
  }

  return cache[n - 1][m - 1]
}

