    function searchInsert(nums: number[], target: number): number {
        let l = 0
        let r = nums.length

        while (l + 1 < r) {
            let idx = Math.round((l + r) / 2)
            if (nums[idx] < target) {
                l = idx + 1
            } else if (nums[idx] > target) {
                r  = idx - 1
            } else if (nums[idx] === target) {
                return idx
            }
        }
        return l
    };

console.log (searchInsert([1,3,5,6], 0))