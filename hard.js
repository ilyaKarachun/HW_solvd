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
        return this.arr.length === 0
    }
}

class findTheLargestDivisorInStack {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    push(...value) {
        return this.stack1.push(...value)
    }

    gcd() {
        if (this.stack1.isEmpty()) {
            return null;
        }

        while (this.stack1.arr.length > 1) {
            const a = this.stack1.pop();
            const b = this.stack1.pop();
            // this.stack2.push([a, b]);
            let [x, y] = [a, b];
            while (y) {
                [x, y] = [y, x % y];
            }
            this.stack1.push(x);
        }

        return this.stack1.top();
    }
}

let test = new findTheLargestDivisorInStack()

test.push(24, 60, 13, 240)
console.log(test)
console.log(test.gcd())
