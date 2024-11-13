function preorderTraversal(root: TreeNode | null): number[] {
    const vertices: number[] = []
    preorderDfs(root, vertices)
    return vertices
};

function preorderDfs(root: TreeNode | null, vertices: number[]) {
    if (!root) {
        return
    }
    vertices.push(root.val)
    preorderDfs(root.left, vertices)
    preorderDfs(root.right, vertices)
}