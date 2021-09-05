/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (25.76%)
 * Likes:    1004
 * Dislikes: 0
 * Total Accepted:    72.9K
 * Total Submissions: 282.8K
 * Testcase Example:  '"babad"'
 *
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * 
 * 示例 1：
 * 
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 * 
 * 
 * 示例 2：
 * 
 * 输入: "cbbd"
 * 输出: "bb"
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
// Answer 1
var longestPalindrome = function(s) {
	let left = 0
	let longestLen = 1
	const len = s.length

	const check = index => {
		const char = s[index]
		let l = index
		let r = index
		while (l >= 0 && r < len && s[l] === s[r]) {
			l--
			r++
		}
		if (r - l - 1 > longestLen) {
			longestLen = r - l - 1
			left = l + 1
		}
		const nextChar = s[index + 1]
		if (char === nextChar) {
			let l = index
			let r = index + 1
			while (l >= 0 && r < len && s[l] === s[r]) {
				l--
				r++
			}
			if (r - l - 1 > longestLen) {
				longestLen = r - l - 1
				left = l + 1
			}
		}
	}

	for (let i = 0; i < len; i++) {
		check(i)
	}

	return s.substr(left, longestLen)
};

