/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 *
 * https://leetcode-cn.com/problems/word-search/description/
 *
 * algorithms
 * Medium (45.42%)
 * Likes:    975
 * Dislikes: 0
 * Total Accepted:    200K
 * Total Submissions: 439.4K
 * Testcase Example:  '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCCED"'
 *
 * 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false
 * 。
 * 
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word =
 * "ABCCED"
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word =
 * "SEE"
 * 输出：true
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word =
 * "ABCB"
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == board.length
 * n = board[i].length
 * 1 
 * 1 
 * board 和 word 仅由大小写英文字母组成
 * 
 * 
 * 
 * 
 * 进阶：你可以使用搜索剪枝的技术来优化解决方案，使其在 board 更大的情况下可以更快解决问题？
 * 
 */

// @lc code=start
const isInPath = (point, path) => {
  return path.some(p => p[0] === point[0] && p[1] === point[1])
}

const foundWord = (board, i, j, word, path) => {
  if (board[i][j] !== word[path.length])
    return false
  path.push([i, j])
  if (path.length === word.length)
    return true
  const m = board.length
  const n = board[0].length
  let result = false
  if (i + 1 < m && !isInPath([i + 1, j], path)) {
    result = result || foundWord(board, i + 1, j, word, path)
  }
  if (i - 1 >= 0 && !isInPath([i - 1, j], path)) {
    result = result || foundWord(board, i - 1, j, word, path)
  }
  if (j + 1 < n && !isInPath([i, j + 1], path)) {
    result = result || foundWord(board, i, j + 1, word, path)
  }
  if (j - 1 >= 0 && !isInPath([i, j - 1], path)) {
    result = result || foundWord(board, i, j - 1, word, path)
  }
  path.pop()

  return result
}
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const m = board.length
  const n = board[0].length
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (foundWord(board, i, j, word, [])) {
        return true
      }
    }
  }

  return false
};
// @lc code=end

