/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 *
 * https://leetcode-cn.com/problems/combination-sum/description/
 *
 * algorithms
 * Medium (72.62%)
 * Likes:    1459
 * Dislikes: 0
 * Total Accepted:    299.7K
 * Total Submissions: 412.5K
 * Testcase Example:  '[2,3,6,7]\n7'
 *
 * 给定一个无重复元素的正整数数组 candidates 和一个正整数 target ，找出 candidates 中所有可以使数字和为目标数 target
 * 的唯一组合。
 * 
 * candidates 中的数字可以无限制重复被选取。如果至少一个所选数字数量不同，则两种组合是唯一的。 
 * 
 * 对于给定的输入，保证和为 target 的唯一组合数少于 150 个。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入: candidates = [2,3,6,7], target = 7
 * 输出: [[7],[2,2,3]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入: candidates = [2,3,5], target = 8
 * 输出: [[2,2,2,2],[2,3,3],[3,5]]
 * 
 * 示例 3：
 * 
 * 
 * 输入: candidates = [2], target = 1
 * 输出: []
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入: candidates = [1], target = 1
 * 输出: [[1]]
 * 
 * 
 * 示例 5：
 * 
 * 
 * 输入: candidates = [1], target = 2
 * 输出: [[1,1]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 1 
 * candidate 中的每个元素都是独一无二的。
 * 1 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const set = new Set()
  const result = []
  const travel = (path, sum) => {
    if (sum >= target) {
      if (sum === target) {
        const pathStr = [...path].sort((a, b) => a > b ? 1 : -1).join(',')
        if (!set.has(pathStr)) {
          result.push([...path])
          set.add(pathStr)
        }
      }
      return
    }
    for (const num of candidates) {
      path.push(num)
      travel(path, sum + num)
      path.pop()
    }
  }

  travel([], 0)

  return result
};
// @lc code=end

