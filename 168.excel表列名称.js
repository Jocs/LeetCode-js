/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 *
 * https://leetcode-cn.com/problems/excel-sheet-column-title/description/
 *
 * algorithms
 * Easy (43.26%)
 * Likes:    454
 * Dislikes: 0
 * Total Accepted:    81.3K
 * Total Submissions: 188K
 * Testcase Example:  '1'
 *
 * 给你一个整数 columnNumber ，返回它在 Excel 表中相对应的列名称。
 * 
 * 例如：
 * 
 * 
 * A -> 1
 * B -> 2
 * C -> 3
 * ...
 * Z -> 26
 * AA -> 27
 * AB -> 28 
 * ...
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：columnNumber = 1
 * 输出："A"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：columnNumber = 28
 * 输出："AB"
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：columnNumber = 701
 * 输出："ZY"
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：columnNumber = 2147483647
 * 输出："FXSHRXW"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let result = ''
  while (columnNumber > 0) {
    columnNumber--
    const mod = columnNumber % 26
    result = String.fromCodePoint(mod + 65) + result
    columnNumber = Math.floor(columnNumber / 26)
  }

  return result
};
// @lc code=end

