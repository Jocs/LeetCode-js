/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 按奇偶排序数组 II
 *
 * https://leetcode-cn.com/problems/sort-array-by-parity-ii/description/
 *
 * algorithms
 * Easy (64.11%)
 * Likes:    47
 * Dislikes: 0
 * Total Accepted:    13K
 * Total Submissions: 20.3K
 * Testcase Example:  '[4,2,5,7]'
 *
 * 给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。
 * 
 * 对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。
 * 
 * 你可以返回任何满足上述条件的数组作为答案。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：[4,2,5,7]
 * 输出：[4,5,2,7]
 * 解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 2 <= A.length <= 20000
 * A.length % 2 == 0
 * 0 <= A[i] <= 1000
 * 
 * 
 * 
 * 
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
const isOdd = n => n % 2 === 1

var sortArrayByParityII = function(A) {
  const len = A.length
  let i
  const odds = []
  const evens = []
  for (i = 0; i < len; i++) {
    const num = A[i]
    if (isOdd(num) && isOdd(i)) continue
    if (!isOdd(num) && !isOdd(i)) continue
    if (isOdd(num)) {
      if (evens.length) {
        const { index, item } = evens.pop()
        A[index] = num
        A[i] = item
      } else {
        odds.push({
          index: i,
          item: num
        })
      }
    } else {
      if (odds.length) {
        const { index, item } = odds.pop()
        A[index] = num
        A[i] = item
      } else {
        evens.push({
          index: i,
          item: num
        })
      }
    }
  }

  return A
};

