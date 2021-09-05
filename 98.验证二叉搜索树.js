/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 *
 * https://leetcode-cn.com/problems/validate-binary-search-tree/description/
 *
 * algorithms
 * Medium (34.61%)
 * Likes:    1151
 * Dislikes: 0
 * Total Accepted:    312.4K
 * Total Submissions: 901K
 * Testcase Example:  '[2,1,3]'
 *
 * 给定一个二叉树，判断其是否是一个有效的二叉搜索树。
 * 
 * 假设一个二叉搜索树具有如下特征：
 * 
 * 
 * 节点的左子树只包含小于当前节点的数。
 * 节点的右子树只包含大于当前节点的数。
 * 所有左子树和右子树自身必须也是二叉搜索树。
 * 
 * 
 * 示例 1:
 * 
 * 输入:
 * ⁠   2
 * ⁠  / \
 * ⁠ 1   3
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * ⁠   5
 * ⁠  / \
 * ⁠ 1   4
 * / \
 * 3   6
 * 输出: false
 * 解释: 输入为: [5,1,4,null,null,3,6]。
 * 根节点的值为 5 ，但是其右子节点值为 4 。
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
const getMaxValue = node => Math.max(node.val, node.left ? getMaxValue(node.left) : -Infinity, node.right ? getMaxValue(node.right) : -Infinity)
const getMinValue = node => Math.min(node.val, node.left ? getMinValue(node.left) : Infinity, node.right ? getMinValue(node.right) : Infinity)
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  if (root.left && root.left.val >= root.val)
    return false
  if (root.right && root.right.val <= root.val)
    return false
  
  if (root.left && root.right) {
    return isValidBST(root.left) && isValidBST(root.right) && root.val > getMaxValue(root.left) && root.val < getMinValue(root.right)
  } else if (root.left) {
    return isValidBST(root.left) && root.val > getMaxValue(root.left)
  } else if (root.right) {
    return isValidBST(root.right) && root.val < getMinValue(root.right)
  }

  return true
};
// @lc code=end

