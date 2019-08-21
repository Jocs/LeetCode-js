/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
 *
 * https://leetcode-cn.com/problems/convert-bst-to-greater-tree/description/
 *
 * algorithms
 * Easy (54.88%)
 * Likes:    141
 * Dislikes: 0
 * Total Accepted:    7.2K
 * Total Submissions: 12.8K
 * Testcase Example:  '[5,2,13]'
 *
 * 给定一个二叉搜索树（Binary Search Tree），把它转换成为累加树（Greater
 * Tree)，使得每个节点的值是原来的节点值加上所有大于它的节点值之和。
 * 
 * 例如：
 * 
 * 
 * 输入: 二叉搜索树:
 * ⁠             5
 * ⁠           /   \
 * ⁠          2     13
 * 
 * 输出: 转换为累加树:
 * ⁠            18
 * ⁠           /   \
 * ⁠         20     13
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
 * @return {TreeNode}
 */
var convertBST = function(root) {
  if (!root) return root
  let count = 0
  const stack = [root]
  const visited = []

  while (stack.length) {
    const peek = stack[stack.length - 1]
    if (peek.right && !visited.includes(peek.right)) {
      stack.push(peek.right)
    } else if (!peek.right || peek.right && visited.includes(peek.right)) {
      const top = stack.pop()
      const temp = top.val
      top.val += count
      count += temp
      visited.push(top)
      if (peek.left) {
        stack.push(peek.left)
      }
    }
  }

  return root
}

