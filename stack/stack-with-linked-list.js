// 用链表实现stack的数据结构
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this._first;
        this._size = 0;
    }

    isEmpty() {
        return this._first === null;
    }
    size() {
        return this._size;
    }
    push(item) {
        if (!item) return;
        var oldfirst = this._first;
        this._first = new Node(item);
        this._first.next = oldfirst;
        this._size++;
    }
    pop() {
        var node = this._first;
        this._first = this._first.next;
        this._size--;

        return node.value;
    }
}

var stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

var r = stack.pop();

console.log(r, stack);