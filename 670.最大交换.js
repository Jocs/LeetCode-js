/*
 * @lc app=leetcode.cn id=670 lang=javascript
 *
 * [670] 最大交换
 *
 * https://leetcode-cn.com/problems/maximum-swap/description/
 *
 * algorithms
 * Medium (36.02%)
 * Likes:    35
 * Dislikes: 0
 * Total Accepted:    1.8K
 * Total Submissions: 4.9K
 * Testcase Example:  '2736'
 *
 * 给定一个非负整数，你至多可以交换一次数字中的任意两位。返回你能得到的最大值。
 * 
 * 示例 1 :
 * 
 * 
 * 输入: 2736
 * 输出: 7236
 * 解释: 交换数字2和数字7。
 * 
 * 
 * 示例 2 :
 * 
 * 
 * 输入: 9973
 * 输出: 9973
 * 解释: 不需要交换。
 * 
 * 
 * 注意:
 * 
 * 
 * 给定数字的范围是 [0, 10^8]
 * 
 * 
 */
/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  const tokens = num.toString().split('').map(i => +i)
  const len = tokens.length
  let i

  for (i = 0; i < len; i++) {
    const d = tokens[i]
    const max = Math.max(...tokens.slice(i))

    if (d === max) {
      continue
    } else {
      const index = tokens.lastIndexOf(max)

      tokens[i] = max
      tokens[index] = d
      break
    }
  }

  return +tokens.join('')
}

