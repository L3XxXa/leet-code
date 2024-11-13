// АХАХХАХА БИТС 100%
// TIME COMPLEXITY: O(len(s))
function isValid(s: string): boolean {
    const parentheses: string[] = []
    for (const char of s) {
        if (char === '[' || char === '(' || char === '{') {
            parentheses.push(char)
        } else {
            switch (char) {
                case ")": {
                    if (parentheses.pop() !== "(") {
                        return false
                    }
                    break
                }
                case "}": {
                    if (parentheses.pop() !== "{") {
                        return false
                    }
                    break

                }
                case "]": {
                    if (parentheses.pop() !== "[") {
                        return false
                    }
                    break

                }
            }
        }
    }

    return parentheses.length === 0
};

console.log(isValid("([])"))