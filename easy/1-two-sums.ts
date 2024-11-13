function twoSum(nums: number[], target: number): number[] {
    const idxes = new Map<number, number>()
    for (let i = 0; i < nums.length; ++i) {
        idxes.set(nums[i], i)
    }
    for (let i = 0; i < nums.length; ++i) {
        const diff = target - nums[i] 
        if (idxes.get(diff) !== i && idxes.has(diff)) {
            return [i, idxes.get(diff)!]
        }
    }
    return []
}

console.log(twoSum([2,5,5,11], 10))