/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (57.07%)
 * Likes:    250
 * Dislikes: 0
 * Total Accepted:    38.6K
 * Total Submissions: 66.4K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。
 * 
 * 例如:
 * 给定二叉树: [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 返回其层次遍历结果：
 * 
 * [
 * ⁠ [3],
 * ⁠ [9,20],
 * ⁠ [15,7]
 * ]
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) {
    return []
  }

  const cache = []
  cache.push([root])
  let len = cache.length
  while (cache[len - 1].length > 0) {
    const top = cache[len - 1]
    const c = []
    for (const t of top) {
      if (t.left) c.push(t.left)
      if (t.right) c.push(t.right)
    }

    cache.push(c)
    len = cache.length
  }

  cache.pop()

  return cache.map(row => row.map(t => t.val))
}

var levelOrder1 = function(root) {
  const result = []
  if (!root) {
    return result
  }

  const travel = (t, level) => {
    if (result.length === level) {
      result.push([])
    }
    result[level].push(t.val)

    if (t.left) travel(t.left, level + 1)
    if (t.right) travel(t.right, level + 1)
  }

  travel(root, 0)

  return result
}

