
export class BSTNode {
    value: number
    left: BSTNode | null
    right: BSTNode | null
    constructor(value: number) {
        this.value = value
        this.left = null
        this.right = null
    }
}

export class BinarySearchTree {
    root: BSTNode | null
    constructor() {
        this.root = null
    }
    insert(value: number) {
        const newLief = new BSTNode(value)

        if(!this.root) {
            this.root = newLief;
        } else {
            this._insertInPlace(this.root, value, newLief)
        }

    }
    private _insertInPlace(node: BSTNode, value: number, newLief: BSTNode) {
        let currentNode = node

        while(true) {
            if(currentNode.value>value) {
                if(!currentNode.left) {
                    currentNode.left = newLief
                    return this
                } 
                currentNode = currentNode.left
            }
            else {
                if(!currentNode.right) {
                    currentNode.right = newLief
                    return this
                } 
                currentNode = currentNode.right
            }
        }
    }
    lookup() {}

}

function traverse(node: BSTNode) {
    const tree: BSTNode = { value: node.value, left: null, right: null }

    tree.left = node.left === null ?  null :  traverse(node.left)
    tree.right = node.right === null ?  null : traverse(node.right)

    return tree
}

const BST = new BinarySearchTree()
BST.insert(4);

BST.insert(2);
BST.insert(5);
BST.insert(3);
BST.insert(6);

if (BST.root) {
    console.log(traverse(BST.root))
}
