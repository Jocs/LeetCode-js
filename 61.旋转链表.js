/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 *
 * https://leetcode-cn.com/problems/rotate-list/description/
 *
 * algorithms
 * Medium (41.83%)
 * Likes:    600
 * Dislikes: 0
 * Total Accepted:    184K
 * Total Submissions: 439.9K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3,4,5], k = 2
 * 输出：[4,5,1,2,3]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [0,1,2], k = 4
 * 输出：[2,0,1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点的数目在范围 [0, 500] 内
 * -100 
 * 0 
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
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  const map = new Map() // pre map
  let node = head
  let pre = null
  let count = 0

  while (node) {
    count++
    map.set(node, pre)
    pre = node
    node = node.next
  }

  map.set(head, pre)
  pre && (pre.next = head)
  node = head

  k = k % count

  while (k > 0) {
    node = map.get(node)
    k--
  }

  const tail = map.get(node)

  if (tail) {
    tail.next = null
  }

  map.clear()

  return node
};
// @lc code=end

