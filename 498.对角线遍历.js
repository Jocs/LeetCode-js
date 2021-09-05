/*
 * @lc app=leetcode.cn id=498 lang=javascript
 *
 * [498] 对角线遍历
 *
 * https://leetcode-cn.com/problems/diagonal-traverse/description/
 *
 * algorithms
 * Medium (45.22%)
 * Likes:    224
 * Dislikes: 0
 * Total Accepted:    39.7K
 * Total Submissions: 87.1K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给定一个含有 M x N 个元素的矩阵（M 行，N 列），请以对角线遍历的顺序返回这个矩阵中的所有元素，对角线遍历如下图所示。
 * 
 * 
 * 
 * 示例:
 * 
 * 输入:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 4, 5, 6 ],
 * ⁠[ 7, 8, 9 ]
 * ]
 * 
 * 输出:  [1,2,4,7,5,3,6,8,9]
 * 
 * 解释:
 * 
 * 
 * 
 * 
 * 
 * 说明:
 * 
 * 
 * 给定矩阵中的元素总数不会超过 100000 。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
  const m = mat.length
  const n = mat[0].length
  const cache = [...new Array(m + n - 1)].map(_ => ([]))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const item = mat[i][j]
      const sum = i + j
      const isEven = sum % 2 === 0

      isEven ? cache[sum].unshift(item) : cache[sum].push(item)
    }
  }

  return cache.flatMap(items => items)
};
// @lc code=end

