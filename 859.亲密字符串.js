/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 *
 * https://leetcode-cn.com/problems/buddy-strings/description/
 *
 * algorithms
 * Easy (25.96%)
 * Likes:    54
 * Dislikes: 0
 * Total Accepted:    5.5K
 * Total Submissions: 20.9K
 * Testcase Example:  '"ab"\n"ba"'
 *
 * 给定两个由小写字母构成的字符串 A 和 B ，只要我们可以通过交换 A 中的两个字母得到与 B 相等的结果，就返回 true ；否则返回 false
 * 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入： A = "ab", B = "ba"
 * 输出： true
 * 
 * 
 * 示例 2：
 * 
 * 输入： A = "ab", B = "ab"
 * 输出： false
 * 
 * 
 * 示例 3:
 * 
 * 输入： A = "aa", B = "aa"
 * 输出： true
 * 
 * 
 * 示例 4：
 * 
 * 输入： A = "aaaaaaabc", B = "aaaaaaacb"
 * 输出： true
 * 
 * 
 * 示例 5：
 * 
 * 输入： A = "", B = "aa"
 * 输出： false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= A.length <= 20000
 * 0 <= B.length <= 20000
 * A 和 B 仅由小写字母构成。
 * 
 * 
 */
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
  const lenA = A.length
  const lenB = B.length
  if (A === B && new Set(A.split('')).size !== lenA) {
    return true
  }
  if (lenA === lenB) {
    const errors = []
    let i
    for (i = 0; i < lenA; i++) {
      const ca = A[i]
      const cb = B[i]
      if (ca !== cb) {
        errors.push([ca, cb])
        if (errors > 2) {
          return false
        }
      }
    }

    if (errors.length === 2) {
      return errors[0][0] === errors[1][1]
        && errors[0][1] === errors[1][0]
    } else {
      return false
    }
  }

  return false
};

