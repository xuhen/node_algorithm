function Node(value) {
    this.value = value;
    this.next = null;
}

var n1 = new Node(1);
var n2 = new Node(2);
var n3 = new Node(3);
var n4 = new Node(4);

n1.next = n2;
n2.next = n3;
n3.next = n4;

var head = n1;

// while (head) {
//   console.log(head.value);

//   head = head.next;
// }

function revertOrder(head) {
    var pre = null;
    var cur = head;
    var next = null;

    while (cur) {
        next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }

    return pre;
}

var h = revertOrder(head);

while (h) {
    console.log(h.value);

    h = h.next;
}