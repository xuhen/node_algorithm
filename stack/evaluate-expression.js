function Stack() {
    this.stack = [];
}

Stack.prototype.push = function (item) {
    if (item) {
        this.stack.push(item);
    }
}

Stack.prototype.pop = function (item) {
    if (!this.isEmpty()) {
        return this.stack.pop();
    }
}

Stack.prototype.size = function () {
    return this.stack.length;
}

Stack.prototype.isEmpty = function () {
    return this.stack.length === 0;
}

Stack.prototype[Symbol.iterator] = function () {
    const self = this;
    let step = this.stack.length - 1;

    const iterator = {
        next() {
            if (step >= 0) {
                return { value: self.stack[step--], done: false }
            } else {
                return { value: undefined, done: true };
            }
        }
    }

    return iterator
}

var str = '( ( 4 * 2 ) + ( ( 2 + 3 ) * ( 4 * 5 ) ) )';

function evaluteExpression(str) {
    if (!str) return;

    var ops = new Stack();
    var vals = new Stack();

    var len = str.length, c;
    for (var i = 0; i < len; i++) {
        c = str[i];
        if (c === '(');
        else if (c === '+') ops.push(c)
        else if (c === '-') ops.push(c)
        else if (c === '*') ops.push(c)
        else if (c === '/') ops.push(c)
        else if (c === ')') {
            var op = ops.pop();
            var v = +vals.pop();
            if (op === '+') v = +vals.pop() + v;
            else if (op === '-') v = +vals.pop() - v;
            else if (op === '*') v = +vals.pop() * v;
            else if (op === '/') v = +vals.pop() / v;
            vals.push(v);
        } else if ('0123456789'.indexOf(c) > -1) {
            vals.push(c);
        }
    }

    return vals.pop();

}


var r = evaluteExpression(str);

console.log(r)

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);


var iterator = stack[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

for (let v of stack) {
    console.log(v);
}

console.log(...stack);