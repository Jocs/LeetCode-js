/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 *
 * https://leetcode-cn.com/problems/unique-paths-ii/description/
 *
 * algorithms
 * Medium (31.49%)
 * Likes:    148
 * Dislikes: 0
 * Total Accepted:    17.7K
 * Total Submissions: 56.1K
 * Testcase Example:  '[[0,0,0],[0,1,0],[0,0,0]]'
 *
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
 * 
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
 * 
 * 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
 * 
 * 
 * 
 * 网格中的障碍物和空位置分别用 1 和 0 来表示。
 * 
 * 说明：m 和 n 的值均不超过 100。
 * 
 * 示例 1:
 * 
 * 输入:
 * [
 * [0,0,0],
 * [0,1,0],
 * [0,0,0]
 * ]
 * 输出: 2
 * 解释:
 * 3x3 网格的正中间有一个障碍物。
 * 从左上角到右下角一共有 2 条不同的路径：
 * 1. 向右 -> 向右 -> 向下 -> 向下
 * 2. 向下 -> 向下 -> 向右 -> 向右
 * 
 * 
 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const m = obstacleGrid[0].length
  const n = obstacleGrid.length
  const cache = new Array(n).fill(undefined).map(_ => new Array(m).fill(undefined))
  let i
  let j
  if (obstacleGrid[0][0] === 1) return 0
  if (obstacleGrid[n - 1][m - 1] === 1) return 0
  cache[0][0] = 1
  let stop = false

  for (i = 1; i < m; i++) {
    const num = obstacleGrid[0][i]
    if (num === 1) {
      stop = true
      cache[0][i] = 0
    } else if (!stop) {
      cache[0][i] = 1
    } else {
      cache[0][i] = 0
    }
  }

  stop = false
  for (i = 1; i < n; i++) {
    const num = obstacleGrid[i][0]
    if (num === 1) {
      stop = true
      cache[i][0] = 0
    } else if (!stop) {
      cache[i][0] = 1
    } else {
      cache[i][0] = 0
    }
  }

  for (i = 1; i < n; i++) {
    for (j = 1; j < m; j++) {
      if (obstacleGrid[i][j] === 1) {
        cache[i][j] = 0
      } else {
        cache[i][j] = cache[i - 1][j] + cache[i][j - 1]
      }
    }
  }

  return cache[n - 1][m - 1]
}

