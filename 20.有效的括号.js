/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const brackets = s.split('')
  const HASK = {
    '{': '}',
    '[': ']',
    '(': ')',
    ')': '(',
    ']': '[',
    '}': '{'
  }
  const stack = []
  while (brackets.length) {
    const bracket = brackets.shift()
    const top = stack.pop()
    if (!top) {
      stack.push(bracket)
    } else if (HASK[top] !== bracket) {
      stack.push(top)
      stack.push(bracket)
    }
  }

  return stack.length === 0
};

