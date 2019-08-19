/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/description/
 *
 * algorithms
 * Medium (60.40%)
 * Likes:    133
 * Dislikes: 0
 * Total Accepted:    33.6K
 * Total Submissions: 54.9K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的 前序 遍历。
 * 
 * 示例:
 * 
 * 输入: [1,null,2,3]  
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3 
 * 
 * 输出: [1,2,3]
 * 
 * 
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
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
 * @return {number[]}
 */
var preorderTraversal1 = function(root) {
  if (!root) {
    return []
  }
  return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)]
}

var preorderTraversal = function(root) {
  if (!root) {
    return []
  }
  const res = []
  const stack = []
  stack.push(root)

  while (stack.length) {
    const top = stack.pop()

    res.push(top.val)
    if (top.right) {
      stack.push(top.right)
    }

    if (top.left) {
      stack.push(top.left)
    }
  }

  return res
}

