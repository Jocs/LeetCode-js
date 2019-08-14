/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 *
 * https://leetcode-cn.com/problems/valid-palindrome-ii/description/
 *
 * algorithms
 * Easy (31.52%)
 * Likes:    78
 * Dislikes: 0
 * Total Accepted:    5.6K
 * Total Submissions: 17.6K
 * Testcase Example:  '"aba"'
 *
 * 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
 * 
 * 示例 1:
 * 
 * 
 * 输入: "aba"
 * 输出: True
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: "abca"
 * 输出: True
 * 解释: 你可以删除c字符。
 * 
 * 
 * 注意:
 * 
 * 
 * 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。
 * 
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  const len = s.length
  let i = 0
  let j = len - 1
  let validNum = 0
  let result = true
  let anotherResult = true
  while (i <= j) {
    const before = s[i]
    const after = s[j]

    if (before === after) {
      i++
      j--
    } else if (validNum === 0) {
      if (s[j - 1] === before) {
        j--
        validNum = 1
      } else if (s[i + 1] === after) {
        i++
        validNum = 1
      } else {
        result = false
        break
      }
    } else {
      result = false
      break
    }
  }
  if (result === true) return true
  i = 0
  j = len - 1
  validNum = 0
  while (i <= j) {
    const before = s[i]
    const after = s[j]

    if (before === after) {
      i++
      j--
    } else if (validNum === 0) {
      if (s[i + 1] === after) {
        i++
        validNum = 1
      } else if (s[j - 1] === before) {
        j--
        validNum = 1
      } else {
        anotherResult = false
        break
      }
    } else {
      anotherResult = false
      break
    }
  }

  return result || anotherResult
};

