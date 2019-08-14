/*
 * @lc app=leetcode.cn id=1046 lang=javascript
 *
 * [1046] 最后一块石头的重量
 *
 * https://leetcode-cn.com/problems/last-stone-weight/description/
 *
 * algorithms
 * Easy (55.39%)
 * Likes:    4
 * Dislikes: 0
 * Total Accepted:    2.5K
 * Total Submissions: 4.4K
 * Testcase Example:  '[2,7,4,1,8,1]'
 *
 * 有一堆石头，每块石头的重量都是正整数。
 * 
 * 每一回合，从中选出两块最重的石头，然后将它们一起粉碎。假设石头的重量分别为 x 和 y，且 x <= y。那么粉碎的可能结果如下：
 * 
 * 
 * 如果 x == y，那么两块石头都会被完全粉碎；
 * 如果 x != y，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 y-x。
 * 
 * 
 * 最后，最多只会剩下一块石头。返回此石头的重量。如果没有石头剩下，就返回 0。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= stones.length <= 30
 * 1 <= stones[i] <= 1000
 * 
 * 
 */
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  const sortedStones = stones.sort((a, b) => a > b ? 1 : -1)

  while (sortedStones.length > 1) {
    const first = sortedStones.pop()
    const second = sortedStones.pop()

    if (first !== second) {
      const offset = first - second
      const len = sortedStones.length
      let i
      let inserted = false
      if (len) {
        for (i = 0; i < len; i++) {
          const item = sortedStones[i]
          if (offset <= item) {
            inserted = true
            sortedStones.splice(i, 0, offset)
            break
          }
        }
  
        if (!inserted) {
          sortedStones.push(offset)
        }
      } else {
        sortedStones.push(offset)
      }
    }
  }

  if (sortedStones.length === 0) return 0
  return sortedStones[0]
};

