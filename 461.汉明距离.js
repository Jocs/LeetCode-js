/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 *
 * https://leetcode-cn.com/problems/hamming-distance/description/
 *
 * algorithms
 * Easy (70.76%)
 * Likes:    170
 * Dislikes: 0
 * Total Accepted:    21.7K
 * Total Submissions: 30.6K
 * Testcase Example:  '1\n4'
 *
 * 两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。
 * 
 * 给出两个整数 x 和 y，计算它们之间的汉明距离。
 * 
 * 注意：
 * 0 ≤ x, y < 2^31.
 * 
 * 示例:
 * 
 * 
 * 输入: x = 1, y = 4
 * 
 * 输出: 2
 * 
 * 解释:
 * 1   (0 0 0 1)
 * 4   (0 1 0 0)
 * ⁠      ↑   ↑
 * 
 * 上面的箭头指出了对应二进制位不同的位置。
 * 
 * 
 */
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let xs = x.toString(2)
  let ys = y.toString(2)
  const len = Math.max(xs.length, ys.length)
  xs = xs.padStart(len, '0')
  ys = ys.padStart(len, '0')
  let count = 0
  let i
  for (i = len - 1; i >= 0; i--) {
    const c1 = xs[i]
    const c2 = ys[i]
    if (c1 !== c2) {
      count++
    }
  }

  return count
};

