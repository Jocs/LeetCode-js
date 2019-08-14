/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 *
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (39.14%)
 * Likes:    130
 * Dislikes: 0
 * Total Accepted:    34.9K
 * Total Submissions: 88.7K
 * Testcase Example:  '"leetcode"'
 *
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 * 
 * 案例:
 * 
 * 
 * s = "leetcode"
 * 返回 0.
 * 
 * s = "loveleetcode",
 * 返回 2.
 * 
 * 
 * 
 * 
 * 注意事项：您可以假定该字符串只包含小写字母。
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const tokens = s.split('')
  const len = tokens.length
  let i
  for (i = 0; i < len; i++) {
    const char = tokens[i]
    const REG = new RegExp(char, 'g')
    let count = 0

    while (REG.exec(s) !== null) {
      count++
      if (count >= 2) {
        break
      }
    }
    if (count === 1) {
      return i
    }
  }

  return -1
};

