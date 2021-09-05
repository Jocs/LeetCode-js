/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 *
 * https://leetcode-cn.com/problems/permutation-in-string/description/
 *
 * algorithms
 * Medium (42.72%)
 * Likes:    402
 * Dislikes: 0
 * Total Accepted:    103.5K
 * Total Submissions: 241.2K
 * Testcase Example:  '"ab"\n"eidbaooo"'
 *
 * 给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。
 * 
 * 换句话说，s1 的排列之一是 s2 的 子串 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s1 = "ab" s2 = "eidbaooo"
 * 输出：true
 * 解释：s2 包含 s1 的排列之一 ("ba").
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s1= "ab" s2 = "eidboaoo"
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s1.length, s2.length <= 10^4
 * s1 和 s2 仅包含小写字母
 * 
 * 
 */

// @lc code=start
const isSameMap = (map1, map2) => {
  if (Object.keys(map1).length !== Object.keys(map2).length)
    return false

  for (const [key, value] of Object.entries(map2)) {
    if (!map1[key] || value !== map1[key]) {
      return false
    }
  }

  return true
}
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const s1Len = s1.length
  const s2Len = s2.length
  const s1Map = {}
  const s2Map = {}
  if (s1Len > s2Len)
    return false

  for (let i = 0; i < s1Len; i++) {
    const char = s1[i]
    const char2 = s2[i]

    if (s1Map[char]) {
      s1Map[char]++
    } else {
      s1Map[char] = 1
    }
    if (s2Map[char2]) {
      s2Map[char2]++
    } else {
      s2Map[char2] = 1
    }
  }

  for (let i = 0; i <= s2Len - s1Len; i++) {
    if (isSameMap(s1Map, s2Map)) {
      return true
    }
    const preChar = s2[i]
    s2Map[preChar]--
    if (s2Map[preChar] === 0)
      delete s2Map[preChar]
    const postChar = s2[i + s1Len]
    if (postChar) {
      if (s2Map[postChar]) {
        s2Map[postChar]++
      } else {
        s2Map[postChar] = 1
      }
    }
  }

  return false
};
// @lc code=end

