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


function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p && !q) {
        return true
    }
    else if (!p || !q) {
        return false
    }
    let pQueue = [ p ]
    let qQueue = [ q ]
    while (pQueue.length > 0 && qQueue.length > 0) {
        let pNode = pQueue.shift()
        let qNode = qQueue.shift()
        if (qNode?.val !== pNode?.val) {
            return false
        }
        if (qNode?.left && pNode?.left) {
            pQueue.push(pNode.left)
            qQueue.push(qNode.left)
        } else if (qNode?.left || pNode?.left){
            return false
        } 
        if (qNode?.right && pNode?.right) {
            pQueue.push(pNode.right)
            qQueue.push(qNode.right)
        } else if (qNode?.right || pNode?.right){
            return false
        } 
    }
    return (pQueue.length === qQueue.length)
};