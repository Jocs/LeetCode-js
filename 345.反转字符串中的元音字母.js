/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 *
 * https://leetcode-cn.com/problems/reverse-vowels-of-a-string/description/
 *
 * algorithms
 * Easy (47.29%)
 * Likes:    49
 * Dislikes: 0
 * Total Accepted:    11.3K
 * Total Submissions: 23.9K
 * Testcase Example:  '"hello"'
 *
 * 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。
 * 
 * 示例 1:
 * 
 * 输入: "hello"
 * 输出: "holle"
 * 
 * 
 * 示例 2:
 * 
 * 输入: "leetcode"
 * 输出: "leotcede"
 * 
 * 说明:
 * 元音字母不包含字母"y"。
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const tokens = s.split('')
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  const len = s.length
  let i = 0
  let j = len - 1
  let leftReady = vowels.includes(tokens[i])
  let rightReady = vowels.includes(tokens[j])
  while (i < j) {
    const left = tokens[i]
    const right = tokens[j]
    if (vowels.includes(left)) {
      leftReady = true
    } else {
      i++
      continue
    }
    if (vowels.includes(right)) {
      rightReady = true
    } else {
      j--
      continue
    }

    if (leftReady && rightReady) {
      tokens[j] = left
      tokens[i] = right
      i++
      j--
    }
  }

  return tokens.join('')
};

