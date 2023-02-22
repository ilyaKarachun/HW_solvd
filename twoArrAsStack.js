// class Stack {
//     constructor() {
//         this.queue1 = [];
//         this.queue2 = [];
//     }
//     push(val) {
//         this.queue1.push(val);
//         while (this.queue2.length > 0) {
//             this.queue1.push(this.queue2.shift());
//         }
//         [this.queue1, this.queue2] = [this.queue2, this.queue1];
//     }
//     pop() {
//         return this.queue2.shift();
//     }
// }

class Stack {
    constructor() {
        this.arr = []
    }
    top() {
        return this.arr[this.arr.length - 1]
    }
    push(...val) {
        return this.arr.push(...val)
    }
    pop() {
        return this.arr.pop()
    }
    isEmpty() {
        // return this.arr.isEmpty()
        return this.arr.length === 0
    }
}

let stackTest = new Stack()
console.log(stackTest.isEmpty())
stackTest.push(10,12,14,8)
console.log(stackTest.isEmpty())
console.log(stackTest.top())
console.log(stackTest.pop())
console.log(stackTest.pop())
console.log(stackTest.pop())
console.log(stackTest.pop())

class Queue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }
    enqueue(...value) {
        this.stack1.arr.push(...value);
    }
    dequeue() {
        if (this.stack2.isEmpty()) { // if have something in stack2 then we take it
        while (!this.stack1.isEmpty()) { // transport all el from stack1 in stack2 in backward order
            // if (this.stack2.arr.length === 0) {
            // while (this.stack1.arr.length > 0) {
                this.stack2.arr.push(this.stack1.arr.pop());
            }
        }
        return this.stack2.arr.pop();
    }
    isEmpty() {
        return this.stack1.isEmpty() && this.stack2.isEmpty()
        // return this.stack1.arr.length === 0 && this.stack2.arr.length === 0;
    }
}

let test = new Queue()
console.log(test.isEmpty())
test.enqueue(8,9,10,3,4,1,10,20,40)
console.log(test.isEmpty())
test.enqueue(2)
test.enqueue(3)
test.enqueue(4)
console.log(test)
console.log(test.dequeue())
console.log(test.dequeue())
console.log(test.dequeue())
console.log(test.dequeue())
console.log(test.dequeue())
console.log(test.dequeue())
console.log(test.dequeue())
console.log(test.dequeue())
console.log(test.dequeue())

console.log(process.memoryUsage())

