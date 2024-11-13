function plusOne(digits: number[]): number[] {
    let idx = digits.length - 1
    digits[idx] ++
    while (digits[idx] >= 10 && idx > 0) {
        digits[idx] = 0
        idx --
        digits[idx] ++
    }
    if (digits[0] >= 10) {
        digits[0] = 0
        return [1, ...digits]
    }
    return digits
};

console.log(plusOne([9, 9, 9]))