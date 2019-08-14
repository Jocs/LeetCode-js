/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 *
 * https://leetcode-cn.com/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (37.66%)
 * Likes:    239
 * Dislikes: 0
 * Total Accepted:    29.9K
 * Total Submissions: 78.9K
 * Testcase Example:  '[1,2]'
 *
 * 请判断一个链表是否为回文链表。
 * 
 * 示例 1:
 * 
 * 输入: 1->2
 * 输出: false
 * 
 * 示例 2:
 * 
 * 输入: 1->2->2->1
 * 输出: true
 * 
 * 
 * 进阶：
 * 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  const stack = []
  let point = head
  while (point) {
    const value = point.val
    stack.push(value)
    point = point.next
  }

  const len = stack.length
  let i = 0
  let j = len - 1

  while (i < j) {
    const before = stack[i]
    const after = stack[j]
    if (before === after) {
      i++
      j--
    } else {
      return false
    }
  }

  return true
};

