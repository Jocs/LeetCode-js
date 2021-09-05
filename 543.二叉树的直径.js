/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
 *
 * https://leetcode-cn.com/problems/diameter-of-binary-tree/description/
 *
 * algorithms
 * Easy (44.91%)
 * Likes:    123
 * Dislikes: 0
 * Total Accepted:    8.1K
 * Total Submissions: 17.5K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过根结点。
 * 
 * 示例 :
 * 给定二叉树
 * 
 * 
 * ⁠         1
 * ⁠        / \
 * ⁠       2   3
 * ⁠      / \     
 * ⁠     4   5    
 * 
 * 
 * 返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。
 * 
 * 注意：两结点之间的路径长度是以它们之间边的数目表示。
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
const getTreeHeight = node => {
  if (!node.left && !node.right) return 0
  return 1 + Math.max(node.left ? getTreeHeight(node.left) : 0, node.right ? getTreeHeight(node.right) : 0)
}

var diameterOfBinaryTree = function(root) {
  let result = -Infinity
  const travel = node => {
    let len = 0
    if (node.left) {
      len += 1 + getTreeHeight(node.left)
    }
    if (node.right) {
      len += 1 + getTreeHeight(node.right)
    }
    result = Math.max(result, len)
    node.left && travel(node.left)
    node.right && travel(node.right)
  }

  travel(root)

  return result
};

