function postorderTraversal(root: TreeNode | null): number[] {
    const vertices: number[] = []
    postorderDfs(root, vertices)
    return vertices
};

function postorderDfs(root: TreeNode | null, vertices: number[]) {
    if (!root) {
        return
    }
    postorderDfs(root.left, vertices)
    postorderDfs(root.right, vertices)
    vertices.push(root.val)
}