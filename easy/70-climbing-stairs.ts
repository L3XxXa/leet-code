function climbStairs(n: number): number {
    const dp: number [] = []
    dp[0] = 1
    dp[1] = 1
    for (let l = 2; l <= n; ++l) {
        dp[l] = dp[l - 1] + dp[l - 2]
    }
    return dp[n]
};