/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 *
 * https://leetcode-cn.com/problems/next-permutation/description/
 *
 * algorithms
 * Medium (34.49%)
 * Likes:    1043
 * Dislikes: 0
 * Total Accepted:    151.4K
 * Total Submissions: 413.1K
 * Testcase Example:  '[1,2,3]'
 *
 * 实现获取 下一个排列 的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。
 * 
 * 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
 * 
 * 必须 原地 修改，只允许使用额外常数空间。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,2,3]
 * 输出：[1,3,2]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [3,2,1]
 * 输出：[1,2,3]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [1,1,5]
 * 输出：[1,5,1]
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：nums = [1]
 * 输出：[1]
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
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let lastNum = Infinity
  let curNum = nums.pop()
  const cache = []

  while(nums.length && curNum >= Math.max(...cache)) {
    lastNum = curNum
    cache.push(curNum)
    cache.sort((a, b) => a < b ? -1 : 1)
    curNum = nums.pop()
  }

  const findMinGreatNum = (c, num) => {
    if (c.length === 0) {
      return c.push(num)
    }
    for (let i = 0; i < c.length; i++) {
      const n = c[i]
      if (n > num) {
        c.splice(i, 1)
        c.push(num)
        c.sort((a, b) => a < b ? -1 : 1)
        c.unshift(n)
        return
      }
    }

    cache.push(num)
  }

  findMinGreatNum(cache, curNum)

  return nums.push(...cache)
};
// @lc code=end

