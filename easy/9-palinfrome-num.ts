function isPalindrome(x: number): boolean {
    if (x < 0 || x % 10 === 0) {
        return false
    }
    if (x >= 0 && x <= 9) {
        return true
    }

    let half = 0
    while (x > half) {
        half = half * 10 + x % 10
        x = Math.floor (x / 10)
    }
    return x === half || x === Math.floor(half / 10)
};