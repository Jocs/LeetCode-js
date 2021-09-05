/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 *
 * https://leetcode-cn.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (56.70%)
 * Likes:    2549
 * Dislikes: 0
 * Total Accepted:    287.9K
 * Total Submissions: 506.2K
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出：6
 * 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：height = [4,2,0,3,2,5]
 * 输出：9
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == height.length
 * 0 
 * 0 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// Answer 1
 var trap1 = function(height) {
  let result = 0
  const len = height.length
  let i = 0
  let j = len - 1
  let lastBefore = height[i]
  let lastAfter = height[j]

  while (i < j) {
      const before = height[i]
      const after = height[j]

      if (before < lastBefore) {
          result += lastBefore - before
      }
      lastBefore = Math.max(before, lastBefore)
      if (after < lastAfter) {
          result += lastAfter - after
      }
      lastAfter = Math.max(lastAfter, after)

      if (before < after) {
          i++
      } else {
          j--
      }
  }

  return result
 };

// Answer 2
var trap = function (height) {
    const len = height.length
    let result = 0
    let max = -Infinity
    let leftMaxs = []
    let rightMaxs = []
    for (let i = 0; i < len; i++) {
        if (height[i] > max) {
            max = height[i]
        }
        leftMaxs.push(max)
    }
    max = -Infinity
    for (let i = len - 1; i >= 0; i--) {
        if (height[i] > max) {
            max = height[i]
        }
        rightMaxs.unshift(max)
    }


    for (let i = 1; i < len - 1; i++) {
        const letfMax = leftMaxs[i - 1]
        const rightMax = rightMaxs[i + 1]
        const min = Math.min(letfMax, rightMax)
        if (min > height[i]) {
            result += min - height[i]
        }
    }

    return result
}
// @lc code=end

