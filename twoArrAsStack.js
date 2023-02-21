class Stack {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }
    push(val) {
        this.queue1.push(val);
        while (this.queue2.length > 0) {
            this.queue1.push(this.queue2.shift());
        }
        [this.queue1, this.queue2] = [this.queue2, this.queue1];
    }
    pop() {
        return this.queue2.shift();
    }
}

class ArrByStack {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }
    enqueue(value) {
        this.stack1.push(value);
    }
    dequeue() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }
}

/* In this implementation, we use two arrays or "stacks":
 inbox and outbox. The enqueue method simply pushes a value
  onto the inbox stack. The dequeue method first checks if
   the outbox stack is empty. If it is, it pops all the values
    from the inbox stack and pushes them onto the outbox stack in
     reverse order. This effectively reverses the order of the
      elements so that the oldest element is now at the top of
       the outbox stack. The method then pops the top value from
        the outbox stack and returns it. */
