/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
 *
 * https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/description/
 *
 * algorithms
 * Medium (76.39%)
 * Likes:    566
 * Dislikes: 0
 * Total Accepted:    89.2K
 * Total Submissions: 116.8K
 * Testcase Example:  '[-10,-3,0,5,9]'
 *
 * 给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。
 * 
 * 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
 * 
 * 示例:
 * 
 * 给定的有序链表： [-10, -3, 0, 5, 9],
 * 
 * 一个可能的答案是：[0, -3, 9, -10, null, 5], 它可以表示下面这个高度平衡二叉搜索树：
 * 
 * ⁠     0
 * ⁠    / \
 * ⁠  -3   9
 * ⁠  /   /
 * ⁠-10  5
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  if (!head) {
    return null
  }
  const nodes = []
  let node = head
  const map = new Map()
  let previous = null
  while (node) {
    map.set(node, previous)
    previous = node
    nodes.push(node)
    node = node.next
  }
  const middle = Math.floor(nodes.length / 2)
  const midNode = nodes[middle]
  const treeNode = new TreeNode(midNode.val)
  if (middle > 0) {
    const pre = map.get(midNode)
    pre.next = null
    treeNode.left = sortedListToBST(head)
  }
  if (nodes.length - 1 > middle) {
    const next = midNode.next
    midNode.next = null
    treeNode.right = sortedListToBST(next)
  }

  return treeNode
};
// @lc code=end

