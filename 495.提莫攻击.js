/*
 * @lc app=leetcode.cn id=495 lang=javascript
 *
 * [495] 提莫攻击
 *
 * https://leetcode-cn.com/problems/teemo-attacking/description/
 *
 * algorithms
 * Medium (50.47%)
 * Likes:    43
 * Dislikes: 0
 * Total Accepted:    3.5K
 * Total Submissions: 6.9K
 * Testcase Example:  '[1,4]\n2'
 *
 * 在《英雄联盟》的世界中，有一个叫 “提莫”
 * 的英雄，他的攻击可以让敌方英雄艾希（编者注：寒冰射手）进入中毒状态。现在，给出提莫对艾希的攻击时间序列和提莫攻击的中毒持续时间，你需要输出艾希的中毒状态总时长。
 * 
 * 你可以认为提莫在给定的时间点进行攻击，并立即使艾希处于中毒状态。
 * 
 * 示例1:
 * 
 * 输入: [1,4], 2
 * 输出: 4
 * 原因: 在第 1 秒开始时，提莫开始对艾希进行攻击并使其立即中毒。中毒状态会维持 2 秒钟，直到第 2 秒钟结束。
 * 在第 4 秒开始时，提莫再次攻击艾希，使得艾希获得另外 2 秒的中毒时间。
 * 所以最终输出 4 秒。
 * 
 * 
 * 示例2:
 * 
 * 输入: [1,2], 2
 * 输出: 3
 * 原因: 在第 1 秒开始时，提莫开始对艾希进行攻击并使其立即中毒。中毒状态会维持 2 秒钟，直到第 2 秒钟结束。
 * 但是在第 2 秒开始时，提莫再次攻击了已经处于中毒状态的艾希。
 * 由于中毒状态不可叠加，提莫在第 2 秒开始时的这次攻击会在第 3 秒钟结束。
 * 所以最终输出 3。
 * 
 * 
 * 注意：
 * 
 * 
 * 你可以假定时间序列数组的总长度不超过 10000。
 * 你可以假定提莫攻击时间序列中的数字和提莫攻击的中毒持续时间都是非负整数，并且不超过 10,000,000。
 * 
 * 
 */
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
  if (timeSeries.length === 0) return 0
  let result = 0
  let preTimePoint = timeSeries.shift()

  while (timeSeries.length) {
    const timePoint = timeSeries.shift()
    const offset = timePoint - preTimePoint
    result +=  offset > duration ? duration : offset
    preTimePoint = timePoint
  }

  result += duration

  return result
};

