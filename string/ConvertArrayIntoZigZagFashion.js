function zigZag(source){
    // Flag true indicates relation "<" is expected,
    // else ">" is expected.  The first expected relation
    // is "<"
    var flag = true;
    var arr = [...source];

    var temp;

    for (var i=0; i <= arr.length-2; i++) {
        if (flag) {  /* "<" relation expected */
            /* If we have a situation like A > B > C,
                we get A > B < C by swapping B and C */
            if (arr[i] > arr[i+1]) {
                // swap
                temp  = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }

        } else { /* ">" relation expected */
            /* If we have a situation like A < B < C,
                we get A < C > B by swapping B and C */
            if (arr[i] < arr[i+1]) {
                // swap
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
        flag = !flag; /* flip flag */
    }

    return arr;
}

var arr = [4, 3, 7, 8, 6, 2, 1];
var r = zigZag(arr);

console.log(r)
