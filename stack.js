
class Stack {
    constructor() {
        this.data = [];
    }

    add(record) {
        this.data.push(record);
    }

    peek() {
        return this.data.length > 0
    }

    remove() {
        return this.data.pop();
    }
}

module.exports = Stack; // to use from another file

// Stack = new Stack();
// Stack.add(1);
// console.log(Stack)
// Stack.remove();
// console.log(Stack)