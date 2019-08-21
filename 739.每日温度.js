/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 *
 * https://leetcode-cn.com/problems/daily-temperatures/description/
 *
 * algorithms
 * Medium (58.37%)
 * Likes:    133
 * Dislikes: 0
 * Total Accepted:    10.4K
 * Total Submissions: 18.3K
 * Testcase Example:  '[73,74,75,71,69,72,76,73]'
 *
 * 根据每日 气温 列表，请重新生成一个列表，对应位置的输入是你需要再等待多久温度才会升高超过该日的天数。如果之后都不会升高，请在该位置用 0 来代替。
 * 
 * 例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4,
 * 2, 1, 1, 0, 0]。
 * 
 * 提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。
 * 
 */
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  const len = T.length
  let i
  let j
  const result = []
  for (i = 0; i < len - 1; i++) {
    const temp = T[i]
    let needPush = true
    for (j = i + 1; j < len; j++) {
      const tem = T[j]
      if (tem > temp) {
        result.push(j - i)
        needPush = false
        break
      }
    }
    if (needPush) {
      result.push(0)
    }
  }

  result.push(0)
  return result
}

