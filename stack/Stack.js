// Functions to be implemented
// push(item)
// pop()
// peek()
// isEmpty()
// printStack()

class Stack {

    // Array is used to implement stack
    constructor() {
        this.items = [];
    }

    push(element) {
        // push element into the items
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty())
            return "Underflow";
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty())
            return "Underflow";
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length == 0;
    }
    printStack() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}

module.exports.Stack = Stack;

var example = function() {
    var stack = new Stack();

    console.log(stack.isEmpty());

    console.log(stack.pop());
    stack.push(10);
    stack.push(20);
    stack.push(30);

    // prints [10, 20, 30]
    console.log(stack.printStack());

    // returns 30
    console.log(stack.peek());

    // returns 30 and remove it from stack
    console.log(stack.pop());

    // returns [10, 20]
    console.log(stack.printStack());

};



if (require.main === module) {
    example();
}