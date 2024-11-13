class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
 }


function hasCycle(head: ListNode | null): boolean {
    const visited: ListNode[] = []
    let currNode = head
    while (currNode) {
        if (!visited.includes(currNode)) {
            visited.push(currNode)
            currNode = currNode.next
        } else {
            return true
        }
    }
    return false
};
