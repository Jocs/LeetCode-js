/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 *
 * https://leetcode-cn.com/problems/perfect-squares/description/
 *
 * algorithms
 * Medium (50.27%)
 * Likes:    177
 * Dislikes: 0
 * Total Accepted:    17.6K
 * Total Submissions: 34.4K
 * Testcase Example:  '12'
 *
 * 给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。
 * 
 * 示例 1:
 * 
 * 输入: n = 12
 * 输出: 3 
 * 解释: 12 = 4 + 4 + 4.
 * 
 * 示例 2:
 * 
 * 输入: n = 13
 * 输出: 2
 * 解释: 13 = 4 + 9.
 * 
 */
const range = n => {
  return new Array(n).fill(1).map((_, i) => i + 1)
}
const hash = {}
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  if (n === 1) return 1
  const num = Math.floor(Math.sqrt(n))
  if (num * num === n) return 1

  return Math.min(...range(num).map(i => {
    const key = n - i * i
    if (typeof hash[key] !== 'number') {
      hash[key] = numSquares(key)
    }
    return hash[key] + 1
  }))
};

