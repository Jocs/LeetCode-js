/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 *
 * https://leetcode-cn.com/problems/path-sum/description/
 *
 * algorithms
 * Easy (47.03%)
 * Likes:    154
 * Dislikes: 0
 * Total Accepted:    21.6K
 * Total Submissions: 46K
 * Testcase Example:  '[5,4,8,11,null,13,4,7,2,null,null,null,1]\n22'
 *
 * 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例: 
 * 给定如下二叉树，以及目标和 sum = 22，
 * 
 * ⁠             5
 * ⁠            / \
 * ⁠           4   8
 * ⁠          /   / \
 * ⁠         11  13  4
 * ⁠        /  \      \
 * ⁠       7    2      1
 * 
 * 
 * 返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const summ = nums => nums.reduce((acc, n) => acc + n, 0)
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    let result = []
    const travel = node => {
      const col = []
      if (!node) return col
      if (!node.left && !node.right) {
        col.push([node.val])
      } else if (node.left && node.right) {
        col.push(...travel(node.left).map(i => [node.val, ...i]))
        col.push(...travel(node.right).map(i => [node.val, ...i]))
      } else if (node.left) {
        col.push(...travel(node.left).map(i => [node.val, ...i]))
      } else if (node.right) {
        col.push(...travel(node.right).map(i => [node.val, ...i]))
      }

      return col
    }
    result = travel(root)
    const len = result.length
    let i
    for (i = 0; i < len; i++) {
      if (summ(result[i]) === sum) {
        return true
      }
    }

    return false
};

