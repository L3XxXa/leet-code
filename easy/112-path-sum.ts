/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) {
        return false
    } 
    const currSum = targetSum - root.val
    if (currSum == 0 && root.left === null && root.right === null) {
        return true
    }
    const left = root.left ? hasPathSum(root.left, currSum) : false
    const right = root.right ? hasPathSum(root.right, currSum) : false
    return left || right
};