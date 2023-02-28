class Stack {
    constructor() {
        this.arr = [];
    }
    top() {
        return this.arr[this.arr.length - 1];
    }
    push(...val) {
        return this.arr.push(...val);
    }
    pop() {
        return this.arr.pop();
    }
    isEmpty() {
        return this.arr.length === 0;
    }
}

class GCD {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }
    push(value) {
        this.stack1.push(value);

        if (this.stack2.isEmpty()) {
            this.stack2.push(value);
        } else {
            let currentGCD = this.stack2.top();
            let newGCD = this.euclidAlgorithm(value, currentGCD);

            if (newGCD <= currentGCD) {
                this.stack2.push(newGCD);
            }
        }
    }

    getMaxGCD() {
        return this.stack2.top();
    }

    euclidAlgorithm(a, b) {
        if (b === 0) {
            return a;
        }
        return this.euclidAlgorithm(b, a % b);
    }
}

const test = new GCD()

test.push(12)
test.push(6)
// test.push(12)
// test.push(24)
// test.push(7)

console.log(test.getMaxGCD())
