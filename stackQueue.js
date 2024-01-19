const Stack = require("./stack") // to use Stack class from stack.js

class Queue {
    constructor() {
        this.queue = [];
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    add(record) {
        this.stack1.data.push(record); // to add data to stack1
    }

    remove() {
        this.refill(this.stack1, this.stack2) // check data exist or not in stack1, remove data from stack1 and add data to stack2

        if (this.stack2.peek()) { // check data exist or not in stack2
            const record = this.stack2.data.pop(); // remove data from stack2
            this.queue.unshift(record) // add data to queue 
        }

        this.refill(this.stack2, this.stack1); // check data exist or not in stack2, remove data from stack2 and add data to stack1
    }

    refill(source, distination) {
        while (source.peek()) {
            distination.data.push(source.data.pop())
        }
    }
}

queue = new Queue();
let numArray = [1, 2, 3, 4, 5];
numArray.map((num) => queue.add(num));
numArray.map(() => queue.remove());
console.log(queue.queue)