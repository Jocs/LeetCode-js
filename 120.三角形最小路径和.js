/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 *
 * https://leetcode-cn.com/problems/triangle/description/
 *
 * algorithms
 * Medium (60.21%)
 * Likes:    194
 * Dislikes: 0
 * Total Accepted:    18.3K
 * Total Submissions: 29.9K
 * Testcase Example:  '[[2],[3,4],[6,5,7],[4,1,8,3]]'
 *
 * 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。
 * 
 * 例如，给定三角形：
 * 
 * [
 * ⁠    [2],
 * ⁠   [3,4],
 * ⁠  [6,5,7],
 * ⁠ [4,1,8,3]
 * ]
 * 
 * 
 * 自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
 * 
 * 说明：
 * 
 * 如果你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题，那么你的算法会很加分。
 * 
 */
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  const rowCount = triangle.length
  const cache = []
  let i
  let j
  // Build cache triangle
  for (i = 1; i <= rowCount; i++) {
    cache.push(new Array(i).fill(undefined))
  }

  cache[0][0] = triangle[0][0]

  for (i = 1; i < rowCount; i++) {
    for (j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        if (j === 0) {
          cache[i][j] = cache[i - 1][0] + triangle[i][j]
        } else {
          cache[i][j] = cache[i - 1][i - 1] + triangle[i][j]
        }
      } else {
        // 是他们肩膀两数最小值加本身
        cache[i][j] = Math.min(cache[i - 1][j - 1], cache[i - 1][j]) + triangle[i][j]
      }
    }
  }

  return Math.min(...cache[rowCount - 1])
}

