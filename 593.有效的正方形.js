/*
 * @lc app=leetcode.cn id=593 lang=javascript
 *
 * [593] 有效的正方形
 *
 * https://leetcode-cn.com/problems/valid-square/description/
 *
 * algorithms
 * Medium (38.63%)
 * Likes:    23
 * Dislikes: 0
 * Total Accepted:    1.1K
 * Total Submissions: 2.8K
 * Testcase Example:  '[0,0]\n[1,1]\n[1,0]\n[0,1]'
 *
 * 给定二维空间中四点的坐标，返回四点是否可以构造一个正方形。
 * 
 * 一个点的坐标（x，y）由一个有两个整数的整数数组表示。
 * 
 * 示例:
 * 
 * 
 * 输入: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
 * 输出: True
 * 
 * 
 * 
 * 
 * 注意:
 * 
 * 
 * 所有输入整数都在 [-10000，10000] 范围内。
 * 一个有效的正方形有四个等长的正长和四个等角（90度角）。
 * 输入点没有顺序。
 * 
 * 
 */
/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
  const length1 = (p1[1] - p2[1]) * (p1[1] - p2[1]) + (p1[0] - p2[0]) * (p1[0] - p2[0])
  const length2 = (p3[1] - p3[1]) * (p3[1] - p4[1]) + (p3[0] - p4[0]) * (p3[0] - p4[0])
  if (length1 !== length2) {
    return false
  }
  if ((p1[0] - p2[0]) === 0) {
    return (p3[1] - p4[1]) === 0 || (p3[0] - p4[0]) === 0
  }
  if ((p3[0] - p4[0]) === 0) {
    return (p1[1] - p2[1]) === 0 || (p1[0] - p2[0]) === 0
  }
  const x1 = (p1[1] - p2[1]) / (p1[0] - p2[0])
  const x2 = (p3[1] - p4[1]) / (p3[0] - p4[0])
  console.log(x1, x2)
  return (x1 === x2 || x1 * x2 === -1)
};

