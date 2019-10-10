function lis(a) {
    var n = a.length;

    var d = Array(n).fill(1);

    for (var i = 0; i < n; i++) {
        for (var j = 0; j < i; j++) {
            if (a[j] < a[i])
                d[i] = Math.max(d[i], d[j] + 1);
        }
    }

    var ans = d[0];
    for (var i = 1; i < n; i++) {
        ans = Math.max(ans, d[i]);
    }
    return ans;
}

// var arr = [3, 10, 2, 1, 20];
var arr = [-1, 3, 4, 5, 2, 2, 2, 2];

var r = lis(arr);

console.log(r)