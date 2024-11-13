function longestCommonPrefix(strs: string[]): string {
    if (!strs.length) {
        return ""
    }
    if (strs.length === 1) {
        return strs[0]
    }
    let prefix = ""
    let currIdx = 0
    while (prefix.length < strs[0].length) {
        const tmp = prefix + strs[0][currIdx]
        if (strs.every(str => str.startsWith(tmp))) {
            prefix += strs[0][currIdx]
            currIdx ++
        } else {
            break
        }
    }
    return prefix
};

console.log(longestCommonPrefix(["dog","racecar","car"]))