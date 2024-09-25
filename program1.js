const getTotalIsles = function (grid) {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let islandCount = 0;

  const dfs = (r, c) => {
      // If out of bounds or at water, return
      if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 'W') {
          return;
      }

      // Mark the land as visited by changing 'L' to 'W'
      grid[r][c] = 'W';

      // Explore all four directions (up, down, left, right)
      dfs(r - 1, c); // up
      dfs(r + 1, c); // down
      dfs(r, c - 1); // left
      dfs(r, c + 1); // right
  };

  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          if (grid[i][j] === 'L') {
              // Found a new island
              islandCount++;
              // Start DFS to mark the whole island
              dfs(i, j);
          }
      }
  }

  return islandCount;
};

// Example usage:
const map1 = [
  ["L","L","L","L","W"],
  ["L","L","W","L","W"],
  ["L","L","W","W","W"],
  ["W","W","W","W","W"],
];

const map2 = [
  ["L","L","W","W","W"],
  ["L","L","W","W","W"],
  ["W","W","L","W","W"],
  ["W","W","W","L","L"],
];

console.log(getTotalIsles(map1)); // Output: 1
console.log(getTotalIsles(map2)); // Output: 3

module.exports = getTotalIsles;
