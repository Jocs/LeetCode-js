/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 报数
 *
 * https://leetcode-cn.com/problems/count-and-say/description/
 *
 * algorithms
 * Easy (50.89%)
 * Likes:    257
 * Dislikes: 0
 * Total Accepted:    36.2K
 * Total Submissions: 71.2K
 * Testcase Example:  '1'
 *
 * 报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下：
 * 
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 * 
 * 
 * 1 被读作  "one 1"  ("一个一") , 即 11。
 * 11 被读作 "two 1s" ("两个一"）, 即 21。
 * 21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。
 * 
 * 给定一个正整数 n（1 ≤ n ≤ 30），输出报数序列的第 n 项。
 * 
 * 注意：整数顺序将表示为一个字符串。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: 1
 * 输出: "1"
 * 
 * 
 * 示例 2:
 * 
 * 输入: 4
 * 输出: "1211"
 * 
 * 
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n === 1) {
    return '1'
  }
  if (n === 2) {
    return '11'
  }
  const prev = countAndSay(n - 1)
  const tokens = prev.split('')
  const result = []
  const len = tokens.length
  let count = 0
  let pre
  let i
  for (i = 0; i < len; i++) {
    const num = tokens[i]
    if (!pre) {
      pre = num
      count++
    } else {
      if (num === pre) {
        count++
      } else {
        result.push(count, pre)
        pre = num
        count = 1
      }
    }
  }

  if (count !== 0) {
    result.push(count, pre)
  }

  return result.join('')
};

