function postorderTraversal(root: TreeNode | null): number[] {
    const vertices: number[] = []
    preorderDfs(root, vertices)
    return vertices
};

function preorderDfs(root: TreeNode | null, vertices: number[]) {
    if (!root) {
        return
    }
    preorderDfs(root.left, vertices)
    preorderDfs(root.right, vertices)
    vertices.push(root.val)
}