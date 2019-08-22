/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 *
 * https://leetcode-cn.com/problems/palindromic-substrings/description/
 *
 * algorithms
 * Medium (56.23%)
 * Likes:    118
 * Dislikes: 0
 * Total Accepted:    6.7K
 * Total Submissions: 11.6K
 * Testcase Example:  '"abc"'
 *
 * 给定一个字符串，你的任务是计算这个字符串中有多少个回文子串。
 * 
 * 具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被计为是不同的子串。
 * 
 * 示例 1:
 * 
 * 
 * 输入: "abc"
 * 输出: 3
 * 解释: 三个回文子串: "a", "b", "c".
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: "aaa"
 * 输出: 6
 * 说明: 6个回文子串: "a", "a", "a", "aa", "aa", "aaa".
 * 
 * 
 * 注意:
 * 
 * 
 * 输入的字符串长度不会超过1000。
 * 
 * 
 */
const isStr = s => {
  const len = s.length
  let i = 0
  let j = len - 1

  while (i < j) {
    const c1 = s[i]
    const c2 = s[j]
    if (c1 !== c2) {
      return false
    } else {
      i++
      j--
    }
  }

  return true
}
const sum = list => list.reduce((acc, l) => acc + l, 0)
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  const res = []
  const len = s.length
  let i
  let j

  for (i = 1; i <= len; i++) {
    let count = 0
    for (j = 0; j < i; j++) {
      const subs = s.substring(j, i)
      if (isStr(subs)) count++
    }

    res.push(count)
  }

  return sum(res)
}

