// https://www.geeksforgeeks.org/implementation-linkedlist-javascript/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    // functions to be implemented 
    // add(element) 
    // insertAt(element, location) 
    // removeFrom(location) 
    // removeElement(element) 

    // Helper Methods 
    // isEmpty 
    // print 
    add(element) {
        if (typeof element === undefined) return;

        var node = new Node(element);
        var current;

        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.size++;

    }
    insertAt(element, index) {
        // 超过左边界和右边界
        if (index < 0 || index > this.size) {
            return false;
        } else {
            var node = new Node(element);
            var curr, prev;

            curr = this.head;

            if (index === 0) {
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                var it = 0;

                while (it < index) {
                    prev = curr;
                    curr = curr.next;
                    it++;
                }
                prev.next = node;
                node.next = curr;
            }

            this.size++;
        }
    }
    removeFrom(index) {
        if (index < 0 || index > this.size - 1) {
            return -1;
        } else {
            var curr, prev, it = 0;
            curr = this.head;

            if (index === 0) {
                this.head = curr.next;
            } else {
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                prev.next = curr.next;
            }

            this.size--;

            return curr.value;
        }
    }
    removeElement(element) {
        if (typeof element === undefined) return -1;

        var curr = this.head;
        var prev = null;

        while (curr !== null) {
            if (curr.value === element) {
                if (prev === null) {
                    this.head = curr.next;
                } else {
                    prev.next = curr.next;
                }
                this.size--;
                return curr.value;
            }

            prev = curr;
            curr = curr.next;
        }

        return -1;
    }
    indexOf(element) {
        var index = 0;
        var curr = this.head;

        while (curr !== null) {
            if (curr.value === element) {
                return index;
            }
            index++;
            curr = curr.next;
        }

        return -1;
    }
    isEmpty() {
        return this.size === 0;
    }
    print() {
        var curr = this.head;

        while (curr !== null) {
            console.log(curr.value);
            curr = curr.next;
        }
    }
}

var ll = new LinkedList();

ll.add(1)
ll.add(2)
ll.add(3)

ll.print();


// console.log(ll, r);