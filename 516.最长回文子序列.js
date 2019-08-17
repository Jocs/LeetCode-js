/*
 * @lc app=leetcode.cn id=516 lang=javascript
 *
 * [516] 最长回文子序列
 *
 * https://leetcode-cn.com/problems/longest-palindromic-subsequence/description/
 *
 * algorithms
 * Medium (46.70%)
 * Likes:    77
 * Dislikes: 0
 * Total Accepted:    3.1K
 * Total Submissions: 6.6K
 * Testcase Example:  '"bbbab"'
 *
 * 给定一个字符串s，找到其中最长的回文子序列。可以假设s的最大长度为1000。
 * 
 * 示例 1:
 * 输入:
 * 
 * 
 * "bbbab"
 * 
 * 
 * 输出:
 * 
 * 
 * 4
 * 
 * 
 * 一个可能的最长回文子序列为 "bbbb"。
 * 
 * 示例 2:
 * 输入:
 * 
 * 
 * "cbbd"
 * 
 * 
 * 输出:
 * 
 * 
 * 2
 * 
 * 
 * 一个可能的最长回文子序列为 "bb"。
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
const cache = {}
var longestPalindromeSubseq = function(s) {
  const len = s.length
  if (len === 0) return 0
  if (len === 1) return 1
  if (len === 2) {
    return s[0] === s[1] ? 2 : 1
  }
  if (s[0] === s[len - 1]) {
    const key = s.substring(1, len - 1)
    let cached = cache[key]
    if (!cached) {
      cached = cache[key] = longestPalindromeSubseq(key)
    }
    return cached + 2
  } else {
    const key1 = s.substring(0, len - 1)
    const key2 = s.substring(1, len)
    let cached1 = cache[key1]
    let cached2 = cache[key2]

    if (!cached1) {
      cached1 = cache[key1] = longestPalindromeSubseq(key1)
    }

    if (!cached2) {
      cached2 = cache[key2] = longestPalindromeSubseq(key2)
    }

    return Math.max(
      cached1,
      cached2
    )
  }
}

