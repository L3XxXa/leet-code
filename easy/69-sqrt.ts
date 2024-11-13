function mySqrt(x: number): number {
    let l = 0
    let r = x
    while (l <= r) {
        const mid = Math.round((l + r) / 2)
        if (x < mid ** 2) {
            r = mid - 1
        } else if (x > mid ** 2) {
            l = mid + 1
        } else {
            return mid
        }
    } 
    return l - 1
};

console.log(mySqrt(8))