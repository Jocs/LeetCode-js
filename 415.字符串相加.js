/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 *
 * https://leetcode-cn.com/problems/add-strings/description/
 *
 * algorithms
 * Easy (53.27%)
 * Likes:    416
 * Dislikes: 0
 * Total Accepted:    133.8K
 * Total Submissions: 250.8K
 * Testcase Example:  '"11"\n"123"'
 *
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * num1 和num2 的长度都小于 5100
 * num1 和num2 都只包含数字 0-9
 * num1 和num2 都不包含任何前导零
 * 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let result = ''
  const num1Arr = num1.split('')
  const num2Arr = num2.split('')
  let temp = 0

  while (num1Arr.length || num2Arr.length) {
    const val1 = +num1Arr.pop() || 0
    const val2 = +num2Arr.pop() || 0

    result = String((val1 + val2 + temp) % 10) + String(result)
    temp = Math.floor((val1 + val2 + temp) / 10)
  }

  if (temp !== 0)
    result = String(temp) + String(result)

  return result
};
// @lc code=end

