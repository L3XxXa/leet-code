function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; ++i) {
        if (nums.includes(target - nums[i])) {
            const item = nums.findIndex(item => item === target - nums[i])
            if (i !== item) {
                return [i, item!]
            }
        }
    }
    return [-1, -1]
}

console.log(twoSum([3,2,4], 6))