/*
 * @lc app=leetcode.cn id=551 lang=javascript
 *
 * [551] 学生出勤记录 I
 *
 * https://leetcode-cn.com/problems/student-attendance-record-i/description/
 *
 * algorithms
 * Easy (48.01%)
 * Likes:    17
 * Dislikes: 0
 * Total Accepted:    5.8K
 * Total Submissions: 12.1K
 * Testcase Example:  '"PPALLP"'
 *
 * 给定一个字符串来代表一个学生的出勤记录，这个记录仅包含以下三个字符：
 * 
 * 
 * 'A' : Absent，缺勤
 * 'L' : Late，迟到
 * 'P' : Present，到场
 * 
 * 
 * 如果一个学生的出勤记录中不超过一个'A'(缺勤)并且不超过两个连续的'L'(迟到),那么这个学生会被奖赏。
 * 
 * 你需要根据这个学生的出勤记录判断他是否会被奖赏。
 * 
 * 示例 1:
 * 
 * 输入: "PPALLP"
 * 输出: True
 * 
 * 
 * 示例 2:
 * 
 * 输入: "PPALLL"
 * 输出: False
 * 
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  tokens = s.split('')
  let A = 0
  let L = 0
  let maxL = 0
  const len = tokens.length
  let i
  for (i = 0; i < len; i++) {
    const char = tokens[i]
    if (char !== 'L') {
      L = 0
    }
    if (char === 'A') {
      A++
    } else if (char === 'L') {
      L++
      if (L > maxL) {
        maxL = L
      }
    }
  }

  return A <= 1 && maxL <= 2
};

