function twoSum(nums, target) {
    var _loop_1 = function (i) {
        if (nums.includes(target - nums[i])) {
            var item = nums.findIndex(function (item) { return item === target - nums[i]; });
            if (i !== item) {
                return { value: [i, item] };
            }
        }
    };
    for (var i = 0; i < nums.length; ++i) {
        var state_1 = _loop_1(i);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return [-1, -1];
}
console.log(twoSum([3, 2, 4], 6));
