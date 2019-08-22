/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 求众数
 *
 * https://leetcode-cn.com/problems/majority-element/description/
 *
 * algorithms
 * Easy (59.86%)
 * Likes:    275
 * Dislikes: 0
 * Total Accepted:    53.3K
 * Total Submissions: 88.9K
 * Testcase Example:  '[3,2,3]'
 *
 * 给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 * 
 * 你可以假设数组是非空的，并且给定的数组总是存在众数。
 * 
 * 示例 1:
 * 
 * 输入: [3,2,3]
 * 输出: 3
 * 
 * 示例 2:
 * 
 * 输入: [2,2,1,1,1,2,2]
 * 输出: 2
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const len = nums.length
  const half = Math.floor(len / 2)
  const hash = {}
  let i

  for (i = 0; i < len; i++) {
    const num = nums[i]
    if (typeof hash[num] === 'number') {
      hash[num]++
    } else {
      hash[num] = 1
    }
    if (hash[num] > half) {
      return num
    }
  }
};

