/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 *
 * https://leetcode-cn.com/problems/unique-binary-search-trees/description/
 *
 * algorithms
 * Medium (69.82%)
 * Likes:    1260
 * Dislikes: 0
 * Total Accepted:    147.3K
 * Total Submissions: 210.9K
 * Testcase Example:  '3'
 *
 * 给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 3
 * 输出：5
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 1
 * 输出：1
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
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  const map = new Map()
  map.set(0, 1)
  map.set(1, 1)
  for (let i = 2; i <= n; i++) {
    let result = 0
    for (let j = 1; j <= i; j++) {
      result += map.get(j - 1) * map.get(i - j)
    }
    map.set(i, result)
  }

  return map.get(n)
};
// @lc code=end

