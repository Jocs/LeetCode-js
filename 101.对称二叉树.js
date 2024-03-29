/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 *
 * https://leetcode-cn.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (47.19%)
 * Likes:    372
 * Dislikes: 0
 * Total Accepted:    39.6K
 * Total Submissions: 83.9K
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * 给定一个二叉树，检查它是否是镜像对称的。
 * 
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠/ \ / \
 * 3  4 4  3
 * 
 * 
 * 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠  \   \
 * ⁠  3    3
 * 
 * 
 * 说明:
 * 
 * 如果你可以运用递归和迭代两种方法解决这个问题，会很加分。
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  const res1 = []
  const res2 = []
  let stack = [root]
  while (stack.length) {
    const node = stack.pop()
    res1.push(node ? node.val : 'null')
    if (node) {
      stack.push(node.left)
      stack.push(node.right)
    }
  }
  stack = [root]
  while (stack.length) {
    const node = stack.pop()
    res2.push(node ? node.val : 'null')
    if (node) {
      stack.push(node.right)
      stack.push(node.left)
    }
  }

  return res1.every((n, i) => n === res2[i])
}

