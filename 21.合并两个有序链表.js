/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let result = null
  let pointer = null
  while (l1 || l2) {
    let value
    if (l1 && l2) {
      value = l1.val < l2.val ? l1.val : l2.val
      if (l1.val < l2.val) {
        l1 = l1.next
      } else {
        l2 = l2.next
      }
    } else {
      value = l1 ? l1.val : l2.val
      if (l1) {
        l1 = l1.next
      } else {
        l2 = l2.next
      }
    }

    if (pointer) {
      pointer.next = new ListNode(value)
      pointer = pointer.next
    } else {
      result = new ListNode(value)
      pointer = result
    }
  }

  return result
};

