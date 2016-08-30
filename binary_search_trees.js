function Node(data, left, right) {
	this.data = data;
	this.count = 1;
	this.left = left;
	this.right = right;
	this.show = show;
}
function show() {
	return this.data;
}



function BST() {
	this.root = null;
	this.insert = insert;
	this.getMin = getMin;
	this.getMax = getMax;
	this.find = find;
	this.update = update;
}
function insert(data) {
	var n = new Node(data, null, null);
	if (this.root == null) {
		this.root = n;
	} else {
		var current = this.root;
		var parent;
		while (true) {
			parent = current;
			if (data < current.data) {
				current = current.left;
				if (current == null) {   
					parent.left = n;
					break;
				}
			} else {
				current = current.right;
				if (current == null) {
					parent.right = n;
					break;
				}
			}
		}
	}
}

function inOrder(node) {
	if (!(node == null)) {
		inOrder(node.left);
		console.log(node.show() + " ");
		inOrder(node.right);
	}
}

function preOrder(node) {
	if (!(node == null)) {
		console.log(node.show() + " ");
		preOrder(node.left);
		preOrder(node.right);
	}
}

function postOrder(node) {
	if (!(node == null)) {
		postOrder(node.left);
		postOrder(node.right);
		console.log(node.show() + " ");
	}
}

function getMin() {
	var current = this.root;
	while (!(current.left == null)) {
		current = current.left;
	}
	return current.data;
}

function getMax() {
	var current = this.root;
	while (!(current.right == null)) {
		current = current.right;
	}
	return current.data;
}

function find(data) {
	var current = this.root;
	if(current === null){
		return null;
	}
	while (current.data != data) {
		if (data < current.data) {
			current = current.left;
		} else {
			current = current.right;
		}
		if (current == null) {
			return null;
		}
	}
	return current;
}

function update(data) {
	var grade = this.find(data);
	grade.count++;
	return grade;
}

function prArray(arr) {
	var str = "";
	str += arr[0];
	for (var i = 1; i < arr.length; ++i) {
		str = str + " " +  arr[i];
		if (i % 10 == 0 || i === 99) {
			console.log(str);
			str = "";
		}
	}
}

function genArray(length) {
	var arr = [];
	for (var i = 0; i < length; ++i) {
		arr[i] = Math.floor(Math.random() * 101);
	}
	return arr;
}

var grades = genArray(100);
prArray(grades);

var gradedistro = new BST();
for (var i = 0; i < grades.length; ++i) {
	var g = grades[i];
	var grade = gradedistro.find(g);
	if (grade == null) {
		gradedistro.insert(g);
	} else {
		gradedistro.update(g);
	}
}

console.log("\n\nEnter a grade: ");
var g = 85;
var aGrade = gradedistro.find(g);
if (aGrade == null) {
	console.log("No occurrences of " + g);

} else {
	console.log("Occurrences of " + g + ": " + aGrade.count);

}
