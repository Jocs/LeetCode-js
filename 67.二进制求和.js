/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode-cn.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (49.25%)
 * Likes:    212
 * Dislikes: 0
 * Total Accepted:    29.8K
 * Total Submissions: 60.5K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 * 
 * 输入为非空字符串且只包含数字 1 和 0。
 * 
 * 示例 1:
 * 
 * 输入: a = "11", b = "1"
 * 输出: "100"
 * 
 * 示例 2:
 * 
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 * 
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const asplited = a.split('').reverse()
  const bsplited = b.split('').reverse()
  const len = Math.max(asplited.length, bsplited.length)
  const result = []
  let i
  let step = 0
  for (i = 0; i < len; i++) {
    const num1 = asplited[i] ? +asplited[i] : 0
    const num2 = bsplited[i] ? +bsplited[i] : 0
    const sum = num1 + num2 + step

    result.push(sum % 2)
    step = sum > 1 ? 1 : 0
  }

  if (step !== 0) {
    result.push(step)
  }

  return result.reverse().join('')
};

