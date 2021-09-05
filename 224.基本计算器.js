/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 *
 * https://leetcode-cn.com/problems/basic-calculator/description/
 *
 * algorithms
 * Hard (41.63%)
 * Likes:    614
 * Dislikes: 0
 * Total Accepted:    67.4K
 * Total Submissions: 161.4K
 * Testcase Example:  '"1 + 1"'
 *
 * 给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "1 + 1"
 * 输出：2
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = " 2-1 + 2 "
 * 输出：3
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "(1+(4+5+2)-3)+(6+8)"
 * 输出：23
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s 由数字、'+'、'-'、'('、')'、和 ' ' 组成
 * s 表示一个有效的表达式
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  const tokens = s.match(/\d+|\+|-|\(|\)/g)
  const numStack = []
  const symStack = []
  if (/\+|-/.test(tokens[0])) {
    tokens.unshift(0)
  }
  while (tokens.length) {
    const item = tokens.shift()
    switch (true) {
      case /\d/.test(item):
        numStack.push(item)
        if (symStack.length && symStack[symStack.length - 1] !== '(') {
          numStack.push(symStack.pop())
        }
        break
      case /\+|-/.test(item):
        symStack.push(item)
        break
      case item === '(':
        symStack.push(item)
        break
      case item === ')':
        symStack.pop()
        if (symStack.length && symStack[symStack.length - 1] !== '(') {
          numStack.push(symStack.pop())
        }
        break
    }
  }
  const stack = []
  while (numStack.length) {
    const item = numStack.shift()
    if (/\+|-/.test(item)) {
      const op2 = +stack.pop()
      const op1 = +stack.pop()
      switch (item) {
        case '+':
          stack.push(op1 + op2)
          break
        case '-':
          stack.push(op1 - op2)
          break
      }
    } else {
      stack.push(item)
    }
  }

  return stack[0]
};
// @lc code=end

