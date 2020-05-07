// https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // function to be implemented 
    // insert(data) 
    // remove(data) 


    // Helper function 
    // findMinNode() 
    // getRootNode() 
    // inorder(node) 
    // preorder(node)                
    // postorder(node) 
    // search(node, data) 

    insert(data) {
        var newNode = new Node(data);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, key) {
        if (node === null) {
            return null;
        } else if (key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (key > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            } else if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            } else {
                var aux = this.findMinNode(node.right);
                node.data = aux.data;

                node.right = this.removeNode(node.right, aux.data);
                return node;
            }
        }

    }
    findMinNode(node) {
        if (node.left === null) {
            return node;
        } else {
            return this.findMinNode(node.left)
        }
    }
    getRootNode() {
        return this.root;
    }
    search(node, data) {
        if (node === null) {
            return null;
        } else if (node.data > data) {
            return this.search(node.left, data);
        } else if (node.data < data) {
            return this.search(node.right, data);
        } else {
            return node;
        }
    }
    // 递归求深度
    maxDepth(node) {
        if (node === null) {
            return 0;
        } else {
            var lDepth = this.maxDepth(node.left);
            var rDepth = this.maxDepth(node.right);

            if (lDepth > rDepth) {
                return lDepth + 1;
            } else {
                return rDepth + 1;
            }
        }
    }
    // 非递归求深度
    maxLevel(node) {
        if (node === null) {
            return 0;
        }
        var queue = [];
        var height = 0;
        queue.push(node);

        while (true) {
            var nodeCount = queue.length;
            if (nodeCount === 0) {
                return height;
            }
            height++;
            while (nodeCount > 0) {
                var newNode = queue.shift();
                if (newNode.left !== null) {
                    queue.push(newNode.left);
                }
                if (newNode.right !== null) {
                    queue.push(newNode.right);
                }
                nodeCount--;
            }
        }
    }
}


var bst = new BinarySearchTree();

bst.insert(15)
bst.insert(25)
bst.insert(10)
bst.insert(7)
bst.insert(22)
bst.insert(17)
bst.insert(13)
bst.insert(5)
bst.insert(9)
bst.insert(27)
bst.insert(30)

bst.remove(22);

var root = bst.getRootNode();
var r = bst.search(root, 22);

var result = bst.maxLevel(root);


console.log(bst, r, result);