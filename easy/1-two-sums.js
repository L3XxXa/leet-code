function twoSum(nums, target) {
    var idxes = new Map();
    for (var i = 0; i < nums.length; ++i) {
        idxes.set(nums[i], i);
    }
    for (var i = 0; i < nums.length; ++i) {
        var diff = target - nums[i];
        if (idxes.get(diff) !== i && idxes.has(diff)) {
            return [i, idxes.get(diff)];
        }
    }
    return [];
}
console.log(twoSum([2, 5, 5, 11], 10));
