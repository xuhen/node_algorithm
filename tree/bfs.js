function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

var n1 = new Node(1);
var n2 = new Node(2);
var n3 = new Node(3);
var n4 = new Node(4);
var n5 = new Node(5);
var n6 = new Node(6);
var n7 = new Node(7);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;
n3.right = n7;


function traverseWithQueue(root) {
    var q = new Queue();
    if (root) {
        q.add(root);
    }

    while (q.hasItem()) {
        var node = q.remove();

        console.log(node.value);

        if (node.left) {
            q.add(node.left);
        }
        if (node.right) {
            q.add(node.right);
        }
    }


}


class Queue {
    constructor() {
        this.list = [];
    }

    remove() {
        if (this.hasItem()) {
            return this.list.shift();
        }
    }

    hasItem() {
        return this.list.length > 0;
    }

    add(item) {
        this.list.push(item);
    }
}


function traveseWithRecursion(root) {
    function helper(node, level) {

        if (!node) {
            return;
        }

        if (!nodes[level]) {
            nodes[level] = [node.value];
        } else {
            nodes[level].push(node.value);
        }

        helper(node.left, level + 1);
        helper(node.right, level + 1);


    }

    var nodes = [];

    helper(root, 0);

    nodes.forEach((levels) => {
        levels.forEach((item) => {
            console.log(item);
        })
    })

}

traverseWithQueue(n1);

traveseWithRecursion(n1);