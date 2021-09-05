/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 *
 * https://leetcode-cn.com/problems/coin-change/description/
 *
 * algorithms
 * Medium (33.34%)
 * Likes:    192
 * Dislikes: 0
 * Total Accepted:    17K
 * Total Submissions: 49.4K
 * Testcase Example:  '[1,2,5]\n11'
 *
 * 给定不同面额的硬币 coins 和一个总金额
 * amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
 * 
 * 示例 1:
 * 
 * 输入: coins = [1, 2, 5], amount = 11
 * 输出: 3 
 * 解释: 11 = 5 + 5 + 1
 * 
 * 示例 2:
 * 
 * 输入: coins = [2], amount = 3
 * 输出: -1
 * 
 * 说明:
 * 你可以认为每种硬币的数量是无限的。
 * 
 */

// const makeChange = (arr, num) => {
//   if (arr.includes(num)) return 1

//   return Math.min(...arr.filter(a => num - a >= 0).map(a => 1 + makeChange(arr, num - a)))
// }

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  coins = coins.sort((a, b) => a > b ? 1 : -1)
  const len = coins.length
  const cache = new Map()
  cache.set(0, 0)
  let i
  for (i = 1; i <= amount; i++) {
    let temp = Infinity
    let j = 0
    while (j < len && i >= coins[j]) {
      temp = Math.min(cache.get(i - coins[j]), temp)
      j++
    }
    cache.set(i, temp + 1)
  }

  const result = cache.get(amount)
  return Number.isFinite(result) ? result : -1
}

