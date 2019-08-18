/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 *
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (39.23%)
 * Likes:    148
 * Dislikes: 0
 * Total Accepted:    26.3K
 * Total Submissions: 66.2K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最小深度。
 * 
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例:
 * 
 * 给定二叉树 [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回它的最小深度  2.
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const isLeaf = t => {
  return t && !t.left && !t.right
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) {
    return 0
  }

  if (isLeaf(root)) {
    return 1
  }

  const cache = []
  cache.push([root])
  let len = cache.length

  while (cache[len - 1].length) {
    const c = []
    let isBreak = false
    for (const t of cache[len - 1]) {
      if (t.left) {
        c.push(t.left)
      }
      if (t.right) {
        c.push(t.right)
      }
      if (!t.left && !t.right) {
        isBreak = true
        break
      }
    }

    if (isBreak) {
      break
    }

    cache.push(c)
    len = cache.length
  }

  if (cache[cache.length - 1].length === 0) {
    cache.pop()
  }

  return cache.length
}

