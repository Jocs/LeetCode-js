/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (70.86%)
 * Likes:    424
 * Dislikes: 0
 * Total Accepted:    28.3K
 * Total Submissions: 39.9K
 * Testcase Example:  '3'
 *
 * 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
 * 
 * 例如，给出 n = 3，生成结果为：
 * 
 * [
 * ⁠ "((()))",
 * ⁠ "(()())",
 * ⁠ "(())()",
 * ⁠ "()(())",
 * ⁠ "()()()"
 * ]
 * 
 * 
 */
const hash = {
  '(': 1,
  ')': -1
}
class TreeNode {
  constructor (value, parent = null) {
    this.value = value
    this.parent = parent
    this.left = null
    this.right = null
  }

  appendChild (node, side) {
    node.parent = this
    this[side] = node
  }

  sum () {
    let sum = hash[this.value]
    let node = this
    let length = 1
    let leftCount = this.value === '(' ? 1 : 0
    let rightCount = this.value === ')' ? 1 : 0
    while (node.parent) {
      node = node.parent
      sum += hash[node.value]
      if (node.value === '(') {
        leftCount++
      } else {
        rightCount++
      }
      length++
    }

    return { sum, length, leftCount, rightCount }
  }

  generateArray () {
    const result = []
    if (!this.left || !this.right) {
      result.push(this.value)
    }
    if (this.left) {
      result.push(...this.left.generateArray().map(r => `${this.value}${r}`))
    }
    if (this.right) {
      result.push(...this.right.generateArray().map(r => `${this.value}${r}`))
    }

    return result
  }
}
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const root = new TreeNode('(')

  const travel = node => {
    const { sum, length, leftCount, rightCount } = node.sum()
    if (length >= n * 2) return
    if (sum > 0) {
      if (leftCount < n) {
        node.appendChild(new TreeNode('('), 'left')
      }
      if (rightCount < n) {
        node.appendChild(new TreeNode(')'), 'right')  
      } 
    } else {
      if (leftCount < n) {
        node.appendChild(new TreeNode('('), 'left')  
      }
    }
    if (node.left) {
      travel(node.left)
    }
    if (node.right) {
      travel(node.right)
    }
  }
  travel(root)

  return root.generateArray().filter(i => i.length === 2 * n)
};

