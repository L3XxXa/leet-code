function getRow(rowIndex: number): number[] {
    const dp: number[][] = []
    for(let i = 1; i <= rowIndex; ++i) {
        const tmp: number[] = []
        for (let j = 1; j <= i; ++j) {
            tmp.push(1)
        }
        dp.push(tmp)
    }
    for (let row = 1; row < rowIndex; ++row) {
        for (let col = 1; col < row; ++col) {
            dp[row][col] = dp[row-1][col-1] + dp[row-1][col]
        }
    }
    return dp[rowIndex]
};
