class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
        this.color = "red";
    }
}


class RedBlackTree {
    constructor() {
        this.root = null;
    }

    add(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            this.root.color = "black";
        } else {
            let currentNode = this.root;

            while (currentNode) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        newNode.parent = currentNode;
                        break;
                    } else {
                        currentNode = currentNode.left;
                    }
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        newNode.parent = currentNode;
                        break;
                    } else {
                        currentNode = currentNode.right;
                    }
                }
            }

            this.fixTree(newNode);
        }
    }

}
