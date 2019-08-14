/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
 *
 * https://leetcode-cn.com/problems/sum-of-left-leaves/description/
 *
 * algorithms
 * Easy (50.30%)
 * Likes:    85
 * Dislikes: 0
 * Total Accepted:    8.1K
 * Total Submissions: 16K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 计算给定二叉树的所有左叶子之和。
 * 
 * 示例：
 * 
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24
 * 
 * 
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  let result = 0
  const travel = (node, isLeft) => {
    if (!node) return
    if (!node.left && !node.right && isLeft) {
      result += node.val
    }
    if (node.left) {
      travel(node.left, true)
    }
    if (node.right) {
      travel(node.right, false)
    }
  }
  travel(root, false)

  return result
};

