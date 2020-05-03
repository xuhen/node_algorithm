class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this._size = 0;
    }
    isEmpty() {
        return this.first === null;
    }
    size() {
        return this._size;
    }
    enqueue(item) {
        if (!item) return;

        var oldlast = this.last;
        this.last = new Node(item);
        if (this.isEmpty()) this.first = this.last;
        else oldlast.next = this.last;
        this._size++;
    }
    dequeue() {
        if (!this.isEmpty()) {
            var oldfirst = this.first;
            this.first = this.first.next;
            this._size--;
            if (this.isEmpty()) this.last = null;
            return oldfirst.value;
        } else {
            return 'dataOverflow';
        }
    }
}

var q = new Queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.dequeue();
q.dequeue();
var r = q.dequeue();

console.log(q, r)