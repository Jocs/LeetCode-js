/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
 *
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/description/
 *
 * algorithms
 * Medium (52.68%)
 * Likes:    680
 * Dislikes: 0
 * Total Accepted:    163.7K
 * Total Submissions: 310K
 * Testcase Example:  '[1,2,3,3,4,4,5]'
 *
 * 存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除链表中所有存在数字重复情况的节点，只保留原始链表中 没有重复出现 的数字。
 * 
 * 返回同样按升序排列的结果链表。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3,3,4,4,5]
 * 输出：[1,2,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [1,1,1,2,3]
 * 输出：[2,3]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点数目在范围 [0, 300] 内
 * -100 
 * 题目数据保证链表已经按升序排列
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let node = head
  let pre = null
  const map = new Map()

  while (node) {
    map.set(node, pre)
    pre = node
    node = node.next
  }

  let start = head
  let end = head
  node = head
  let newHead = head

  while (node) {
    if (node.val === end.val) {
      end = node
    } else {
      if (start !== end) {
        const pre = map.get(start)
        if (pre) {
          pre.next = node
          map.set(node, pre)
        } else {
          newHead = node
          map.set(node, null)
        }
      }
      start = node
      end = node
    }

    node = node.next
  }

  if (start !== end) {
    const pre = map.get(start)
    if (pre) {
      pre.next = null
    } else {
      newHead = null
    }
  }


  map.clear()

  return newHead
};
// @lc code=end

