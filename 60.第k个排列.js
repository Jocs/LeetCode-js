/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 第k个排列
 *
 * https://leetcode-cn.com/problems/permutation-sequence/description/
 *
 * algorithms
 * Medium (46.47%)
 * Likes:    90
 * Dislikes: 0
 * Total Accepted:    10.2K
 * Total Submissions: 22.1K
 * Testcase Example:  '3\n3'
 *
 * 给出集合 [1,2,3,…,n]，其所有元素共有 n! 种排列。
 * 
 * 按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：
 * 
 * 
 * "123"
 * "132"
 * "213"
 * "231"
 * "312"
 * "321"
 * 
 * 
 * 给定 n 和 k，返回第 k 个排列。
 * 
 * 说明：
 * 
 * 
 * 给定 n 的范围是 [1, 9]。
 * 给定 k 的范围是[1,  n!]。
 * 
 * 
 * 示例 1:
 * 
 * 输入: n = 3, k = 3
 * 输出: "213"
 * 
 * 
 * 示例 2:
 * 
 * 输入: n = 4, k = 9
 * 输出: "2314"
 * 
 * 
 */


// @lc code=start
const mul = n => {
  let result = 1
  while(n > 0) {
    result *= n
    n--
  }

  return result
}
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getPermutation = function(n, k) {
  const arr = [...new Array(n)].map((_, i) => i + 1)
  let result = ''
  while(n > 0) {
    const num = Math.max(Math.ceil(k / mul(n - 1)) - 1, 0)
    result += String(arr[num])
    arr.splice(num, 1)
    console.log('n', num)
    console.log(n, k)
    k = num === 0 ? k : k - mul(num + 1)
    n--
  }

  return result
}
// @lc code=end

