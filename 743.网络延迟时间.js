/*
 * @lc app=leetcode.cn id=743 lang=javascript
 *
 * [743] 网络延迟时间
 *
 * https://leetcode-cn.com/problems/network-delay-time/description/
 *
 * algorithms
 * Medium (43.73%)
 * Likes:    169
 * Dislikes: 0
 * Total Accepted:    16.9K
 * Total Submissions: 37K
 * Testcase Example:  '[[2,1,1],[2,3,1],[3,4,1]]\n4\n2'
 *
 * 有 N 个网络节点，标记为 1 到 N。
 * 
 * 给定一个列表 times，表示信号经过有向边的传递时间。 times[i] = (u, v, w)，其中 u 是源节点，v 是目标节点， w
 * 是一个信号从源节点传递到目标节点的时间。
 * 
 * 现在，我们从某个节点 K 发出一个信号。需要多久才能使所有节点都收到信号？如果不能使所有节点收到信号，返回 -1。
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 
 * 输入：times = [[2,1,1],[2,3,1],[3,4,1]], N = 4, K = 2
 * 输出：2
 * 
 * 
 * 
 * 
 * 注意:
 * 
 * 
 * N 的范围在 [1, 100] 之间。
 * K 的范围在 [1, N] 之间。
 * times 的长度在 [1, 6000] 之间。
 * 所有的边 times[i] = (u, v, w) 都有 1 <= u, v <= N 且 0 <= w <= 100。
 * 
 * 
 */

// @lc code=start
const getNodes = (times, N) => {
  const result = []
  for (const [n1, n2] of times) {
    if (!result.includes(n1)) {
      result.push(n1)
    }
    if (!result.includes(n2)) {
      result.push(n2)
    }
  }

  return result.length === N ? result : []
}

const distanceK = (n, k, times) => {
  if (k === n) return 0

  for (const [n1, n2, d] of times) {
    if (n1 === k && n2 === n) {
      return d
    }
  }

  return Infinity
} 

/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var networkDelayTime = function(times, N, K) {
  if (times.length === 1) {
    if (times[0][0] === K) {
      return times[0][2]
    }
    return -1
  }
  const shortDistanceMap = {
    [K]: 0
  }
  const collection = [K]
  let nodes = getNodes(times, N)
  const index = nodes.indexOf(K)
  let lastNode = K
  // remove k
  if (index > -1) {
    nodes.splice(index, 1)
  } else {
    return -1
  }
  
  while (true) {
    if (nodes.length === 0) {
      break
    }

    const distances = {}
    for (const node of nodes) {
      distances[node] = Math.min(distanceK(node, K, times), shortDistanceMap[lastNode] + distanceK(node, lastNode, times))
    }

    const minNode = Object.keys(distances).reduce((acc, k) => {
      if (distances[k] < distances[acc]) {
        acc = k
      }

      return acc
    }, nodes[0])

    if (!minNode || distances[minNode] === Infinity) {
      return -1
    }

    collection.push(minNode)
    lastNode = minNode

    shortDistanceMap[minNode] = distances[minNode]

    nodes = nodes.filter(n => n != minNode)
  }

  if (shortDistanceMap[lastNode] && Object.keys(shortDistanceMap).length === N) {
    return shortDistanceMap[lastNode]
  }

  return -1
};
// @lc code=end

