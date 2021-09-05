/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 *
 * https://leetcode-cn.com/problems/largest-number/description/
 *
 * algorithms
 * Medium (40.92%)
 * Likes:    757
 * Dislikes: 0
 * Total Accepted:    112.9K
 * Total Submissions: 275.6K
 * Testcase Example:  '[10,2]'
 *
 * 给定一组非负整数 nums，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数。
 * 
 * 注意：输出结果可能非常大，所以你需要返回一个字符串而不是整数。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [10,2]
 * 输出："210"
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [3,30,34,5,9]
 * 输出："9534330"
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [1]
 * 输出："1"
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：nums = [10]
 * 输出："10"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 0 
 * 
 * 
 */

// @lc code=start
compareTowNumber = (a, b) => {
  return Number(String(a) + String(b)) > Number(String(b) + String(a))
}
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  if (nums.every(n => n === 0))
    return '0'
  const sortedNums = nums.sort((a, b) => compareTowNumber(a, b) ? -1 : 1)
  return sortedNums.reduce((acc, s) => acc + s, '')
};
// @lc code=end

