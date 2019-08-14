/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 *
 * https://leetcode-cn.com/problems/design-linked-list/description/
 *
 * algorithms
 * Easy (23.35%)
 * Likes:    79
 * Dislikes: 0
 * Total Accepted:    8.1K
 * Total Submissions: 35.2K
 * Testcase Example:  '["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get"]\n' +
  '[[],[1],[3],[1,2],[1],[1],[1]]'
 *
 * 设计链表的实现。您可以选择使用单链表或双链表。单链表中的节点应该具有两个属性：val 和 next。val 是当前节点的值，next
 * 是指向下一个节点的指针/引用。如果要使用双向链表，则还需要一个属性 prev 以指示链表中的上一个节点。假设链表中的所有节点都是 0-index 的。
 * 
 * 在链表类中实现这些功能：
 * 
 * 
 * get(index)：获取链表中第 index 个节点的值。如果索引无效，则返回-1。
 * addAtHead(val)：在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
 * addAtTail(val)：将值为 val 的节点追加到链表的最后一个元素。
 * addAtIndex(index,val)：在链表中的第 index 个节点之前添加值为 val  的节点。如果 index
 * 等于链表的长度，则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。
 * deleteAtIndex(index)：如果索引 index 有效，则删除链表中的第 index 个节点。
 * 
 * 
 * 
 * 
 * 示例：
 * 
 * MyLinkedList linkedList = new MyLinkedList();
 * linkedList.addAtHead(1);
 * linkedList.addAtTail(3);
 * linkedList.addAtIndex(1,2);   //链表变为1-> 2-> 3
 * linkedList.get(1);            //返回2
 * linkedList.deleteAtIndex(1);  //现在链表是1-> 3
 * linkedList.get(1);            //返回3
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 所有值都在 [1, 1000] 之内。
 * 操作次数将在  [1, 1000] 之内。
 * 请不要使用内置的 LinkedList 库。
 * 
 * 
 */
class Node {
  constructor (val) {
    this.val = val
    this.prev = null
    this.next = null
  }
  insertBefore (node) {
    const oldPrev = this.prev
    node.next = this
    this.prev = node
    if (oldPrev) {
      oldPrev.next = node
      node.prev = oldPrev
    }
  }

  insertAfter (node) {
    const oldNext = this.next
    this.next = node
    node.prev = this
    if (oldNext) {
      oldNext.prev = node
      node.next = oldNext 
    }
  }

  remove () {
    if (this.prev) {
      this.prev.next = this.next
    }
    if (this.next) {
      this.next.prev = this.prev
    }
  }
}
/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
  this.head = null
  this.tail = null
  this.length = 0
};

MyLinkedList.prototype.getNode = function(index) {
  if (index < 0 || index >= this.length) return null
  let count = 0
  let point = this.head
  while (count < index) {
    point = point.next
    count++
  }

  return point
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  const node = this.getNode(index)
  return node ? node.val : -1
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  const node = new Node(val)
  this.length++
  if (!this.head) {
    this.head = this.tail = node
    return
  }

  this.head.insertBefore(node)
  this.head = node
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  const node = new Node(val)
  this.length++
  if (!this.tail) {
    return this.head = this.tail = node
  }

  this.tail.insertAfter(node)
  this.tail = node
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  // hack for pass
  if (index < 0) index = 0
  if (index < 0 || index > this.length) return
  if (index === 0 && !this.head) {
    return this.addAtHead(val)
  }
  if (index === this.length) {
    return this.addAtTail(val)
  }

  const node = this.getNode(index)
  const newNode = new Node(val)
  node.insertBefore(newNode)
  this.length++
  if (index === 0) {
    this.head = newNode
  } else if (index === this.length - 1) {
    this.tail = newNode
  }
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  const node = this.getNode(index)
  if (node) {
    if (node === this.head) {
      this.head = node.next
    } else if (node === this.tail) {
      this.tail = node.prev
    }
    node.remove()
    this.length--
  }
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

