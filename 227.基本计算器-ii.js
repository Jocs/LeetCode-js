/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 *
 * https://leetcode-cn.com/problems/basic-calculator-ii/description/
 *
 * algorithms
 * Medium (43.59%)
 * Likes:    435
 * Dislikes: 0
 * Total Accepted:    79K
 * Total Submissions: 181K
 * Testcase Example:  '"3+2*2"'
 *
 * 给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。
 * 
 * 整数除法仅保留整数部分。
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "3+2*2"
 * 输出：7
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = " 3/2 "
 * 输出：1
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = " 3+5 / 2 "
 * 输出：5
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s 由整数和算符 ('+', '-', '*', '/') 组成，中间由一些空格隔开
 * s 表示一个 有效表达式
 * 表达式中的所有整数都是非负整数，且在范围 [0, 2^31 - 1] 内
 * 题目数据保证答案是一个 32-bit 整数
 * 
 * 
 * 
 * 
 */

// @lc code=start
const simpleCal = (a, b, type) => {
  switch (type) {
    case '+':
      return Number(a) + Number(b)
    case '-':
      return Number(a) - Number(b)
    case '*':
      return Number(a) * Number(b)
    case '/':
      return Math.floor(Number(a) / Number(b))
  }
}
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  const nums = s.match(/\d+/g)
  const sym = s.match(/[\/\*\+\-]/g) || []
  let tempNum = null
  let tempSym = null

  while (sym.length) {
    const s = sym.shift()
    const num = nums.shift()
    if (tempSym && /[\+\-]/.test(s)) {
      sym.unshift(s)
      nums.unshift(simpleCal(tempNum, num, tempSym))
      tempSym = null
      tempNum = null
      continue
    }
    if (/[\+\-]/.test(s) && sym.length && /[\/\*]/.test(sym[0])) {
      tempNum = num
      tempSym = s
      continue
    }
    const num2 = nums.shift()
    nums.unshift(simpleCal(num, num2, s))
  }

  if (tempSym) {
    nums[0] = simpleCal(tempNum, nums[0], tempSym)
  }

  return nums[0]
};
// @lc code=end

