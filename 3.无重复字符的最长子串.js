/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (30.20%)
 * Likes:    2072
 * Dislikes: 0
 * Total Accepted:    159.7K
 * Total Submissions: 525.8K
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 
 * 示例 1:
 * 
 * 输入: "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 * 
 * 示例 2:
 * 
 * 输入: "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 
 * 
 * 示例 3:
 * 
 * 输入: "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s === '')
    return 0
  let start = 0
  let end = 0
  let len = s.length
  let result = 0
  const set = new Set()

  while (start < len && end < len && start <= end) {
    let endChar = s.charAt(end)
    while (!set.has(endChar) && end < len) {
      set.add(endChar)
      endChar = s.charAt(++end)
    }

    result = Math.max(result, end - start)

    let startChar = s.charAt(start)
    while (startChar !== endChar && start < len) {
      set.delete(startChar)
      startChar = s.charAt(++start)
    }

    start++
    end++
  }
  set.clear()

  return result
};

