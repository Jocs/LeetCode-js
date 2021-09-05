/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
 *
 * https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/description/
 *
 * algorithms
 * Hard (44.06%)
 * Likes:    1150
 * Dislikes: 0
 * Total Accepted:    142K
 * Total Submissions: 321.7K
 * Testcase Example:  '[1,2,3]'
 *
 * 路径 被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个
 * 节点，且不一定经过根节点。
 * 
 * 路径和 是路径中各节点值的总和。
 * 
 * 给你一个二叉树的根节点 root ，返回其 最大路径和 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [1,2,3]
 * 输出：6
 * 解释：最优路径是 2 -> 1 -> 3 ，路径和为 2 + 1 + 3 = 6
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [-10,9,20,null,null,15,7]
 * 输出：42
 * 解释：最优路径是 15 -> 20 -> 7 ，路径和为 15 + 20 + 7 = 42
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点数目范围是 [1, 3 * 10^4]
 * -1000 
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
 * @param {TreeNode} root
 * @return {number}
 */
const getMaxPathSum = root => {
  let result = -Infinity
  const travel = (node, sum) => {
    if (sum + node.val > result) {
      result = sum + node.val
    }
    if (node.left) {
      travel(node.left, sum + node.val)
    }
    if (node.right) {
      travel(node.right, sum + node.val)
    }
  }

  travel(root, 0)

  return result
}

var maxPathSum = function(root) {
  let result = -Infinity
  const queue = [root]
  while (queue.length) {
    const node = queue.shift()
    if (node.left) {
      queue.push(node.left)
    }
    if (node.right) {
      queue.push(node.right)
    }
    const leftMax = Math.max(node.left ? getMaxPathSum(node.left) : 0, 0)
    const rightMax = Math.max(node.right ? getMaxPathSum(node.right) : 0, 0)

    if (node.val + leftMax + rightMax > result) {
      result = node.val + leftMax + rightMax
    }
  }

  return result
};
// @lc code=end

