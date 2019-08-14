/*
 * @lc app=leetcode.cn id=390 lang=javascript
 *
 * [390] 消除游戏
 *
 * https://leetcode-cn.com/problems/elimination-game/description/
 *
 * algorithms
 * Medium (38.70%)
 * Likes:    29
 * Dislikes: 0
 * Total Accepted:    1.1K
 * Total Submissions: 2.7K
 * Testcase Example:  '9'
 *
 * 给定一个从1 到 n 排序的整数列表。
 * 首先，从左到右，从第一个数字开始，每隔一个数字进行删除，直到列表的末尾。
 * 第二步，在剩下的数字中，从右到左，从倒数第一个数字开始，每隔一个数字进行删除，直到列表开头。
 * 我们不断重复这两步，从左到右和从右到左交替进行，直到只剩下一个数字。
 * 返回长度为 n 的列表中，最后剩下的数字。
 * 
 * 示例：
 * 
 * 
 * 输入:
 * n = 9,
 * 1 2 3 4 5 6 7 8 9
 * 2 4 6 8
 * 2 6
 * 6
 * 
 * 输出:
 * 6
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
const isOdd = n => n % 2 === 1

var lastRemaining = function(n) {
  let arr = new Array(n).fill(1).map((_, i) => i + 1)
  let i
  let count = 0 //  even left and odd right
  let retain = []
  while (arr.length !== 1) {
    retain = []
    const len = arr.length
    if (count === 0) {
      for (i = 0; i < len; i++) {
        if (!isOdd(i + 1)) {
          retain.push(arr[i])
        }
      }
      count = 1
    } else {
      for (i = len - 1; i >= 0; i--) {
        if (!isOdd(len - i)) {
          retain.unshift(arr[i])
        }
      }
      count = 0
    }

    arr = retain
  }

  return arr[0]
};

