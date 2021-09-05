/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 *
 * https://leetcode-cn.com/problems/longest-valid-parentheses/description/
 *
 * algorithms
 * Hard (35.34%)
 * Likes:    1404
 * Dislikes: 0
 * Total Accepted:    175.7K
 * Total Submissions: 495.4K
 * Testcase Example:  '"(()"'
 *
 * 给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "(()"
 * 输出：2
 * 解释：最长有效括号子串是 "()"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = ")()())"
 * 输出：4
 * 解释：最长有效括号子串是 "()()"
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = ""
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * s[i] 为 '(' 或 ')'
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  const len = s.length
  const stack = [-1]
  let index = 0
  let result = 0

  while (index < len) {
    const char = s[index]
    if (char === '(') {
      stack.push(index)
    } else {
      stack.pop()
      if (stack.length === 0) {
        stack.push(index)
      } else {
        result = Math.max(result, index - stack[stack.length - 1])
      }
    }
    index++
  }

  return result
};
// @lc code=end

