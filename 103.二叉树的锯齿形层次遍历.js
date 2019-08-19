/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/description/
 *
 * algorithms
 * Medium (50.11%)
 * Likes:    88
 * Dislikes: 0
 * Total Accepted:    15.8K
 * Total Submissions: 30.9K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
 * 
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 返回锯齿形层次遍历如下：
 * 
 * [
 * ⁠ [3],
 * ⁠ [20,9],
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
var zigzagLevelOrder = function(root) {
  if (!root) {
    return []
  }

  const cache = [[root]]
  let len = cache.length
  while (cache[len - 1].length) {
    const row = cache[len - 1]
    const c = []
    for (const t of row) {
      if (t.left) {
        c.push(t.left)
      }
      if (t.right) {
        c.push(t.right)
      }
    }

    cache.push(c)
    len = cache.length
  }

  cache.pop()
  const res = cache.map(r => r.map(i => i.val))
  res.forEach((i, j) => {
    if (j % 2 === 1) {
      i.reverse()
    }
  })

  return res
}

