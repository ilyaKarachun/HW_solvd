class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    add(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    remove(value) {
        let currentNode = this.head;
        let previousNode = null;

        while (currentNode !== null) {
            if (currentNode.value === value) {
                if (previousNode === null) {
                    this.head = currentNode.next;
                } else {
                    previousNode.next = currentNode.next;
                }

                if (currentNode.next === null) {
                    this.tail = previousNode;
                }

                this.length--;
                break;
            }

            previousNode = currentNode;
            currentNode = currentNode.next;
        }
    }

    find(value) {
        let currentNode = this.head;

        while (currentNode !== null) {
            if (currentNode.value === value) {
                return currentNode;
            }

            currentNode = currentNode.next;
        }

        return null;
    }

    getIndexOf(value) {
        let current = this.head;
        let index = 0;

        while(current) {
            if (current.value === value) {
                return index;
            }

            current = current.next;
            index++;
        }

        return -1;
    }

    hasLoop() {
        let slow = this.head;
        let fast = this.head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow === fast) {
                return true;
            }
        }

        return false;
    }
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
// console.log(list)
// list.remove(2);
console.log(list.getIndexOf(3))
// const nodeFindAfterRemove = list.find(2);
//
// const nodeFind = list.find(3);
// console.log(nodeFindAfterRemove)
// console.log(nodeFind)
//
// const hasLoop = list.hasLoop();
// console.log(hasLoop)
