/*
 * @lc app=leetcode.cn id=315 lang=javascript
 *
 * [315] 计算右侧小于当前元素的个数
 *
 * https://leetcode-cn.com/problems/count-of-smaller-numbers-after-self/description/
 *
 * algorithms
 * Hard (37.80%)
 * Likes:    85
 * Dislikes: 0
 * Total Accepted:    4.2K
 * Total Submissions: 11.2K
 * Testcase Example:  '[5,2,6,1]'
 *
 * 给定一个整数数组 nums，按要求返回一个新数组 counts。数组 counts 有该性质： counts[i] 的值是  nums[i] 右侧小于
 * nums[i] 的元素的数量。
 * 
 * 示例:
 * 
 * 输入: [5,2,6,1]
 * 输出: [2,1,1,0] 
 * 解释:
 * 5 的右侧有 2 个更小的元素 (2 和 1).
 * 2 的右侧仅有 1 个更小的元素 (1).
 * 6 的右侧有 1 个更小的元素 (1).
 * 1 的右侧有 0 个更小的元素.
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
  const len = nums.length
  let i
  let j
  let result = []
  for (i = 0; i < len; i++) {
    const num1 = nums[i]
    let count = 0
    for (j = i + 1; j < len; j++) {
      const num2 = nums[j]
      if (num2 < num1) count++
    }
    result.push(count)
  }

  return result
};

