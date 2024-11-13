function longestPalindrome(s: string): number {
    let result = 0
    const map = new Map<string, number>()
    for (const char of s) {
        const amount = map.get(char)
        if (amount) {
            map.set(char, amount + 1)
        } else {
            map.set(char, 1)
        }
    }

    console.log(map.keys())

    for (const char of map.keys()) {
        console.log(char)
        console.log(map.get(char)! % 2)
        if (map.get(char)! % 2 === 0) {
            result += map.get(char)!
        }
    }
    return result 
};

console.log(longestPalindrome("abccccdd"))