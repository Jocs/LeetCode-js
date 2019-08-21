/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/description/
 *
 * algorithms
 * Medium (66.26%)
 * Likes:    232
 * Dislikes: 0
 * Total Accepted:    43.2K
 * Total Submissions: 64.8K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的中序 遍历。
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
 * 输出: [1,3,2]
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
var inorderTraversal1 = function(root) {
  if (!root) {
    return []
  }
  return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
};

var inorderTraversal = function(root) {
  if (!root) {
    return []
  }

  const res = []
  const visited = []
  const stack = [root]

  while (stack.length) {
    const peek = stack[stack.length - 1]
    if (peek.left && !visited.includes(peek.left)) {
      stack.push(peek.left)
    } else if (!peek.left || peek.left && visited.includes(peek.left)) {
      const top = stack.pop()
      res.push(top.val)
      visited.push(top)

      if (top.right) {
        stack.push(top.right)
      }
    }
  }

  return res
};

