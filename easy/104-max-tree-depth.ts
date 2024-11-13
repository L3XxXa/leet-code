class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
       this.val = (val===undefined ? 0 : val)
       this.left = (left===undefined ? null : left)
       this.right = (right===undefined ? null : right)
    }
}

function maxDepth(root: TreeNode | null): number {
    if(!root) {
        return 0
    }
    if (!root.left && !root.right) {
        return 1
    }
    if (root.left && root.right) {
        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
    }
    if (root.left) {
        return 1 + maxDepth(root.left)
    }
    if (root.right) {
        return 1 + maxDepth(root.right)
    }
    return 1 // вообще до этой строки точно не дойдет
};