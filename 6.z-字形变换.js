/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 *
 * https://leetcode-cn.com/problems/zigzag-conversion/description/
 *
 * algorithms
 * Medium (43.28%)
 * Likes:    329
 * Dislikes: 0
 * Total Accepted:    40.2K
 * Total Submissions: 92.9K
 * Testcase Example:  '"PAYPALISHIRING"\n3'
 *
 * 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
 * 
 * 比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
 * 
 * L   C   I   R
 * E T O E S I I G
 * E   D   H   N
 * 
 * 
 * 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。
 * 
 * 请你实现这个将字符串进行指定行数变换的函数：
 * 
 * string convert(string s, int numRows);
 * 
 * 示例 1:
 * 
 * 输入: s = "LEETCODEISHIRING", numRows = 3
 * 输出: "LCIRETOESIIGEDHN"
 * 
 * 
 * 示例 2:
 * 
 * 输入: s = "LEETCODEISHIRING", numRows = 4
 * 输出: "LDREOEIIECIHNTSG"
 * 解释:
 * 
 * L     D     R
 * E   O E   I I
 * E C   I H   N
 * T     S     G
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1)
    return s
  const arr = [...new Array(numRows)].map(_ => '')
  const len = s.length
  let isArrowDown = true

  const getRowIndex = x => {
    if (isArrowDown) {
      if (x + 1 < numRows) {
        return x + 1
      } else {
        isArrowDown = false
        return x - 1
      }
    } else {
      if (x === 0) {
        isArrowDown = true
        return x + 1
      } else {
        return x - 1
      }
    }
  }
  let index = 0
  let start = 0

  while (index < len) {
    const char = s[index]
    arr[start] += char
    start = getRowIndex(start)
    index++
  }

  return arr.reduce((acc, r) => acc + r, '')
};
// @lc code=end

