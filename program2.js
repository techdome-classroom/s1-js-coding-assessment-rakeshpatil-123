const decodeTheRing = function (s, p) {
  const m = s.length;
  const n = p.length;

  // Create a DP table with (m + 1) x (n + 1)
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));
  
  // Initialize the DP table
  dp[0][0] = true; // Both empty strings match

  // Handle patterns that start with '*' which can match empty string
  for (let j = 1; j <= n; j++) {
      if (p[j - 1] === '*') {
          dp[0][j] = dp[0][j - 1];
      }
  }

  // Fill the DP table
  for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
          if (p[j - 1] === '*') {
              dp[i][j] = dp[i][j - 1] || dp[i - 1][j]; // Match empty or one more character
          } else if (p[j - 1] === '?' || p[j - 1] === s[i - 1]) {
              dp[i][j] = dp[i - 1][j - 1]; // Match single character or '?'
          }
      }
  }

  return dp[m][n];
};

// Example usage:
console.log(decodeTheRing("aa", "a")); // Output: false
console.log(decodeTheRing("aa", "*")); // Output: true
console.log(decodeTheRing("cb", "?a")); // Output: false
console.log(decodeTheRing("adceb", "*a*b")); // Output: true
console.log(decodeTheRing("acdcb", "a*c?b")); // Output: false

module.exports = decodeTheRing;
