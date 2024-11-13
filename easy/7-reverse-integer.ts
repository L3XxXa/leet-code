function reverse(x: number): number {
    let tmp = 0
    let helper = Math.abs(x)
    while (helper > 0) {
        tmp = tmp * 10 + helper % 10
        helper = Math.floor(helper / 10)
    }
    if (tmp >= 2 ** 31 - 1 || tmp <= -1 * 2 ** 31) {
        return 0
    }
    return x < 0 ? tmp * -1 : tmp
};

console.log(reverse(1534236469))