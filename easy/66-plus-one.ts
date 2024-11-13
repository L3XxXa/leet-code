function plusOne(digits: number[]): number[] {
    for(let i = digits.length - 1; i >= 1; --i) {
        digits[i] ++
        if (digits[i] > 10) {
            digits[i] = 0
            digits[i - 1] ++
        }
    }
};