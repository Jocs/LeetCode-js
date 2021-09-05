/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 *
 * https://leetcode-cn.com/problems/restore-ip-addresses/description/
 *
 * algorithms
 * Medium (53.40%)
 * Likes:    642
 * Dislikes: 0
 * Total Accepted:    137.9K
 * Total Submissions: 257.7K
 * Testcase Example:  '"25525511135"'
 *
 * 给定一个只包含数字的字符串，用以表示一个 IP 地址，返回所有可能从 s 获得的 有效 IP 地址 。你可以按任何顺序返回答案。
 * 
 * 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。
 * 
 * 例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312"
 * 和 "192.168@1.1" 是 无效 IP 地址。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "25525511135"
 * 输出：["255.255.11.135","255.255.111.35"]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "0000"
 * 输出：["0.0.0.0"]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "1111"
 * 输出：["1.1.1.1"]
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：s = "010010"
 * 输出：["0.10.0.10","0.100.1.0"]
 * 
 * 
 * 示例 5：
 * 
 * 
 * 输入：s = "101023"
 * 输出：["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * s 仅由数字组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  const result = []
  const restoreIp = (s, path) => {
    if (path.length === 4 && s === '')
      result.push(Array.from(path))
    if (s === '' || path.length >= 4)
      return
    path.push(s[0])
    restoreIp(s.substring(1), path)
    path.pop()
    const twoDNum = Number(s.substring(0, 2))
    if (twoDNum >= 10) {
      path.push(twoDNum)
      restoreIp(s.substring(2), path)
      path.pop()
    }
    const threeDNum = Number(s.substring(0, 3))
    if (threeDNum >= 100 && threeDNum <= 255) {
      path.push(threeDNum)
      restoreIp(s.substring(3), path)
      path.pop()
    }
  }

  restoreIp(s, [])

  return result.map(item => item.join('.'))
};
// @lc code=end

