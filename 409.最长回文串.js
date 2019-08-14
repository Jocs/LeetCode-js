/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 *
 * https://leetcode-cn.com/problems/longest-palindrome/description/
 *
 * algorithms
 * Easy (48.73%)
 * Likes:    57
 * Dislikes: 0
 * Total Accepted:    6.8K
 * Total Submissions: 14K
 * Testcase Example:  '"abccccdd"'
 *
 * 给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。
 * 
 * 在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。
 * 
 * 注意:
 * 假设字符串的长度不会超过 1010。
 * 
 * 示例 1: 
 * 
 * 
 * 输入:
 * "abccccdd"
 * 
 * 输出:
 * 7
 * 
 * 解释:
 * 我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
 * 
 * 
 */
const isOdd = num => num % 2 === 1
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const tokens = s.split('')
  const hash = {}
  while (tokens.length) {
    const top = tokens.pop()
    if (hash[top]) {
      hash[top]++
    } else {
      hash[top] = 1
    }
  }

  let result = 0
  let hasOdd = false

  Object.keys(hash).forEach(key => {
    const value = hash[key]
    if (isOdd(value)) {
      hasOdd = true
      result += value - 1
    } else {
      result += value
    }
  })

  return result + (hasOdd ? 1 : 0)
};

