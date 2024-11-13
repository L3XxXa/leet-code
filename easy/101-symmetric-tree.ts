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


function isSymmetric(root: TreeNode | null): boolean {
    if (!root) {
        return true
    }
    
    let leftSubtree = [ root.left ]
    let rightSubtree = [ root.right ]

    while (leftSubtree.length > 0 && rightSubtree.length > 0) {
        const leftNode = leftSubtree.pop()
        const rightNode = rightSubtree.pop()

        if (!leftNode && !rightNode) {
            continue
        } else if (!leftNode || !rightNode) {
            return false
        } else if (leftNode.val !== rightNode.val) {
            return false
        }
        leftSubtree.push(leftNode.left, leftNode.right)
        rightSubtree.push(rightNode.right, rightNode.left)
    }
    return leftSubtree.length === rightSubtree.length
};