function binarySearch(key, a) { // 数组必须是有序的
    var lo = 0;
    var hi = a.length - 1;

    while (lo <= hi) {
        var mid = lo + Math.floor((hi - lo) / 2);

        if (a[mid] > key) hi = mid - 1;
        else if (a[mid] < key) lo = mid + 1;
        else return mid;

    }

    return -1;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var key = 2;

var r = binarySearch(key, arr);
console.log(r);