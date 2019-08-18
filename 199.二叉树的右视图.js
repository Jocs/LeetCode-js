/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
 *
 * https://leetcode-cn.com/problems/binary-tree-right-side-view/description/
 *
 * algorithms
 * Medium (59.31%)
 * Likes:    87
 * Dislikes: 0
 * Total Accepted:    7K
 * Total Submissions: 11.6K
 * Testcase Example:  '[1,2,3,null,5,null,4]'
 *
 * 给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
 * 
 * 示例:
 * 
 * 输入: [1,2,3,null,5,null,4]
 * 输出: [1, 3, 4]
 * 解释:
 * 
 * ⁠  1            <---
 * ⁠/   \
 * 2     3         <---
 * ⁠\     \
 * ⁠ 5     4       <---
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
 * @return {number[]}
 */
var rightSideView = function(root) {
  if (!root) {
    return []
  }

  const result = []

  const travel = (t, level) => {
    if (result.length === level) {
      result.push([])
    }
    result[level].push(t.val)
    if (t.left) {
      travel(t.left, level + 1)
    }
    if (t.right) {
      travel(t.right, level + 1)
    }
  }

  travel(root, 0)

  return result.map(row => row[row.length - 1])
}

