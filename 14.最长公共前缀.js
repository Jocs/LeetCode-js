/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	let result = ''
	let i

	for (i = 0; i < Infinity; i++) {
		if (strs.every(str => typeof str[i] !== 'undefined')) {
			if (new Set(strs.map(str => str[i])).size === 1) {
				result += strs[0][i]
			} else {
				break
			}
		} else {
			break
		}
	}

	return result
};

