function sortedArrayToBST(nums: number[]): TreeNode | null {
    if (!nums.length) {
        return null
    }
    if (nums.length === 1) {
        return new TreeNode(nums[0])
    }

    const mid = Math.floor(nums.length / 2) 
    const newNode = new TreeNode(nums[mid])
    newNode.left = sortedArrayToBST(nums.slice(0, mid))
    newNode.right = sortedArrayToBST(nums.slice(mid + 1))
    return newNode
};