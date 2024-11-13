function inorderTraversal(root: TreeNode | null): number[] {
    const vertices: number[] = []
    inorderDfs(root, vertices)
    return vertices
};

function inorderDfs(root: TreeNode | null, vertices: number[]) {
    if (!root) {
        return
    }
    inorderDfs(root.left, vertices)
    vertices.push(root.val)
    inorderDfs(root.right, vertices)
}