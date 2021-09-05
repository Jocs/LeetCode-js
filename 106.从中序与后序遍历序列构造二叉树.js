/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
 *
 * https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/
 *
 * algorithms
 * Medium (72.12%)
 * Likes:    566
 * Dislikes: 0
 * Total Accepted:    128.8K
 * Total Submissions: 178.6K
 * Testcase Example:  '[9,3,15,20,7]\n[9,15,7,20,3]'
 *
 * 根据一棵树的中序遍历与后序遍历构造二叉树。
 * 
 * 注意:
 * 你可以假设树中没有重复的元素。
 * 
 * 例如，给出
 * 
 * 中序遍历 inorder = [9,3,15,20,7]
 * 后序遍历 postorder = [9,15,7,20,3]
 * 
 * 返回如下的二叉树：
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const len = postorder.length
  const val = postorder[len - 1]
  const node = new TreeNode(val)
  const index = inorder.indexOf(val)
  const leftInOrder = inorder.slice(0, index)
  const leftPostOrder = postorder.slice(0, index)
  const rightInOrder = inorder.slice(index + 1)
  const rightPostOrder = postorder.slice(index, len - 1)

  if (leftInOrder.length) {
    node.left = buildTree(leftInOrder, leftPostOrder)
  }

  if (rightInOrder.length) {
    node.right = buildTree(rightInOrder, rightPostOrder)
  }
  
  return node
};
// @lc code=end

