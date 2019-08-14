/*
 * @lc app=leetcode.cn id=476 lang=javascript
 *
 * [476] 数字的补数
 *
 * https://leetcode-cn.com/problems/number-complement/description/
 *
 * algorithms
 * Easy (67.83%)
 * Likes:    114
 * Dislikes: 0
 * Total Accepted:    10.7K
 * Total Submissions: 15.7K
 * Testcase Example:  '5'
 *
 * 给定一个正整数，输出它的补数。补数是对该数的二进制表示取反。
 * 
 * 注意:
 * 
 * 
 * 给定的整数保证在32位带符号整数的范围内。
 * 你可以假定二进制数不包含前导零位。
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: 5
 * 输出: 2
 * 解释: 5的二进制表示为101（没有前导零位），其补数为010。所以你需要输出2。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: 1
 * 输出: 0
 * 解释: 1的二进制表示为1（没有前导零位），其补数为0。所以你需要输出0。
 * 
 * 
 */
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  const tokens = num.toString(2).split('')
  const len = tokens.length
  let i
  for (i = 0; i < len; i++) {
    const item = tokens[i]
    tokens[i] = item === '1' ? '0' : '1'
  }

  return parseInt(tokens.join(''), 2)
};

