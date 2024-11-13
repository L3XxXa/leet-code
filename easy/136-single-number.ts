function singleNumber(nums: number[]): number {
    let appearsOnlyOnce: number = 0
    for (const num of nums) {
        appearsOnlyOnce ^= num
    }
    return appearsOnlyOnce
};

console.log(singleNumber([2, 2, 1]))