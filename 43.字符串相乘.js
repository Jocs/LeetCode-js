/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 *
 * https://leetcode-cn.com/problems/multiply-strings/description/
 *
 * algorithms
 * Medium (39.58%)
 * Likes:    167
 * Dislikes: 0
 * Total Accepted:    19.3K
 * Total Submissions: 48.7K
 * Testcase Example:  '"2"\n"3"'
 *
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
 * 
 * 示例 1:
 * 
 * 输入: num1 = "2", num2 = "3"
 * 输出: "6"
 * 
 * 示例 2:
 * 
 * 输入: num1 = "123", num2 = "456"
 * 输出: "56088"
 * 
 * 说明：
 * 
 * 
 * num1 和 num2 的长度小于110。
 * num1 和 num2 只包含数字 0-9。
 * num1 和 num2 均不以零开头，除非是数字 0 本身。
 * 不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。
 * 
 * 
 */
const mul = (str, single, bit) => {
  const tokens = str.split('').map(i => +i)
  const num = +single
  let temp = 0
  const len = tokens.length
  const result = []
  for (i = len - 1; i >= 0; i--) {
    const n = tokens[i] * num + temp
    temp = Math.floor(n / 10)
    result.unshift(n % 10)
  }
  if (temp !== 0) {
    result.unshift(temp)
  }

  return bit > 0 ? [...result, ...new Array(bit).fill(0)] : result
}
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') return '0'
  const len2 = num2.length
  const n2Tokens = num2.split('').map(i => +i)
  const cache = []
  const result = []
  let temp = 0
  let i   
  for (i = len2 - 1; i >= 0; i--) {
    cache.push(mul(num1, n2Tokens[i], len2 - i - 1))
  }

  const maxLen = cache.reduce((acc, i) => Math.max(acc, i.length), 0)

  for (i = 0; i < maxLen; i++) {
    const n = cache.reduce((acc, r) => {
      return acc + (r[r.length - i - 1] !== undefined ? r[r.length - i - 1] : 0)
    }, 0) + temp
    temp = Math.floor(n / 10)
    result.unshift(n % 10)
  }

  if (temp !== 0) {
    result.unshift(temp)
  }

  return result.join('')
}

