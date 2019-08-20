/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 *
 * https://leetcode-cn.com/problems/decode-string/description/
 *
 * algorithms
 * Medium (44.12%)
 * Likes:    93
 * Dislikes: 0
 * Total Accepted:    4.6K
 * Total Submissions: 10.3K
 * Testcase Example:  '"3[a]2[bc]"'
 *
 * 给定一个经过编码的字符串，返回它解码后的字符串。
 * 
 * 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
 * 
 * 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
 * 
 * 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。
 * 
 * 示例:
 * 
 * 
 * s = "3[a]2[bc]", 返回 "aaabcbc".
 * s = "3[a2[c]]", 返回 "accaccacc".
 * s = "2[abc]3[cd]ef", 返回 "abcabccdcdcdef".
 * 
 * 
 */
const tokenizer = s => {
  const res = []
  const REG_EXP = /(\d{1,}|[\[\]]|[a-z]{1,})/i

  while (s.length) {
    const match = REG_EXP.exec(s)
    if (match) {
      res.push(match[1])
      s = s.substring(match[1].length)
    } else {
      console.error('Invalid input string!')
    }
  }

  return res
}

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const tokens = tokenizer(s)
  const stack = []

  while (tokens.length) {
    const token = tokens.shift()
    if (/\d/.test(token)) {
      stack.push(+token)
    } else if (/\[/.test(token)) {
      continue
    } else if (/[a-z]/i.test(token)) {
      if (stack.length !== 0 && /[a-z]/i.test(stack[stack.length - 1])) {
        stack.push(`${stack.pop()}${token}`)
      } else {
        stack.push(token)
      }
    } else if (/\]/.test(token)) {
      const str = stack.pop()
      let repeatCount = stack.pop()
      if (typeof repeatCount === 'string') {
        stack.push(repeatCount)
        repeatCount = 1
      }
      const rstr = str.repeat(repeatCount)
      if (stack.length !== 0 && /[a-z]/i.test(stack[stack.length - 1])) {
        stack.push(`${stack.pop()}${rstr}`)
      } else {
        stack.push(rstr)
      }
    }
  }

  return stack.join('')
}

