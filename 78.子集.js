/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 *
 * https://leetcode-cn.com/problems/subsets/description/
 *
 * algorithms
 * Medium (79.97%)
 * Likes:    1279
 * Dislikes: 0
 * Total Accepted:    287.9K
 * Total Submissions: 360K
 * Testcase Example:  '[1,2,3]'
 *
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
 * 
 * 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,2,3]
 * 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0]
 * 输出：[[],[0]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * -10 
 * nums 中的所有元素 互不相同
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const result = new Set()
  const path = []

  const travel = (ns, path) => {
    if (path.length) {
      result.add([...path].sort(
        (a, b) => a > b ? -1 : 1
      ).join('.'))
    }
    for (const num of ns) {
      path.push(num)
      travel(ns.filter(n => n !== num), path)
      path.pop(num)
    }
  }

  travel(nums, path)

  return [[], ...[ ...result ].map(item => item.split('.'))]
};
// @lc code=end

