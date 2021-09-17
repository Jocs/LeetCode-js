/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 *
 * https://leetcode-cn.com/problems/remove-linked-list-elements/description/
 *
 * algorithms
 * Easy (41.71%)
 * Likes:    254
 * Dislikes: 0
 * Total Accepted:    29.4K
 * Total Submissions: 70.5K
 * Testcase Example:  '[1,2,6,3,4,5,6]\n6'
 *
 * 删除链表中等于给定值 val 的所有节点。
 * 
 * 示例:
 * 
 * 输入: 1->2->6->3->4->5->6, val = 6
 * 输出: 1->2->3->4->5
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let newHead = null
  let pre = null
  let node = head

  while (node) {
    if (node.val === val) {
      if (pre) {
        pre.next = node.next
      }
    } else {
      if (!newHead) {
        newHead = node
      }
      pre = node
    }
    node = node.next
  }

  return newHead
};

