function isAlphabet(x) {
    return ( (x >= 'A' && x <= 'Z') ||
            (x >= 'a' && x <= 'z') );
}

function swap(l, r, arr) {
    var temp;
    temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
}

function reverse(str) {
    // Initialize left and right pointers
    var r = str.length - 1, l = 0;

    // Traverse string from both ends until
    // 'l' and 'r'
    while (l < r) {
        // Ignore special characters
        if (!isAlphabet(str[l])){
            l++;
        } else if(!isAlphabet(str[r])) {
            r--;
        } else { // Both str[l] and str[r] are not spacial
            swap(l, r, str);
            l++;
            r--;
        }
    }
}

var str = "a!!!b.c.d,e'f,ghi";
var arr = str.split('');

reverse(arr);
console.log(arr.join(''))