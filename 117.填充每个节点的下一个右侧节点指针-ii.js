/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 *
 * https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node-ii/description/
 *
 * algorithms
 * Medium (60.99%)
 * Likes:    442
 * Dislikes: 0
 * Total Accepted:    86.2K
 * Total Submissions: 141.1K
 * Testcase Example:  '[1,2,3,4,5,null,7]'
 *
 * 给定一个二叉树
 * 
 * 
 * struct Node {
 * ⁠ int val;
 * ⁠ Node *left;
 * ⁠ Node *right;
 * ⁠ Node *next;
 * }
 * 
 * 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。
 * 
 * 初始状态下，所有 next 指针都被设置为 NULL。
 * 
 * 
 * 
 * 进阶：
 * 
 * 
 * 你只能使用常量级额外空间。
 * 使用递归解题也符合要求，本题中递归程序占用的栈空间不算做额外的空间复杂度。
 * 
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 
 * 
 * 输入：root = [1,2,3,4,5,null,7]
 * 输出：[1,#,2,3,#,4,5,7,#]
 * 解释：给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B 所示。序列化输出按层序遍历顺序（由 next
 * 指针连接），'#' 表示每层的末尾。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中的节点数小于 6000
 * -100 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
 var connect = function (root) {
  if (!root) return null
  const levelMap = new Map()
  const pRelationShipMap = new Map()
  pRelationShipMap.set(root, null)
  let preNode = null
  const queue = [root]
  while (queue.length) {
    const node = queue.shift()

    if (node.left) {
      pRelationShipMap.set(node.left, node)
      queue.push(node.left)
    }
    if (node.right) {
      pRelationShipMap.set(node.right, node)
      queue.push(node.right)
    }
    const parent = pRelationShipMap.get(node)
    if (parent) {
      const pLevel = levelMap.get(parent)
      levelMap.set(node, pLevel + 1)
    } else {
      levelMap.set(node, 0)
    }

    if (preNode) {
      const preLevel = levelMap.get(preNode)
      const level = levelMap.get(node)

      if (preLevel === level) {
        preNode.next = node
      }
    }

    preNode = node
  }

  return root
};
// @lc code=end

