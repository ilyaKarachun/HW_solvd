function hasLoop(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
}

const head = {data: 1, next: null};
const node2 = {data: 2, next: null};
const node3 = {data: 3, next: null};
const node4 = {data: 4, next: null};

head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = head;

console.log(hasLoop(head))
