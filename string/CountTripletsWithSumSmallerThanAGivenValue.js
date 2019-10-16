function countTriplets(arr, sum) {
    var n = arr.length;
    // Sort input array
    arr.sort((a, b) => a - b);

    console.log('arr', arr)

    // Initialize result
    var ans = 0;

    // Every iteration of loop counts triplet with
    // first element as arr[i].
    for (var i = 0; i < n - 2; i++) {
        // Initialize other two elements as corner elements
        // of subarray arr[j+1..k]
        var j = i + 1, k = n - 1;

        // Use Meet in the Middle concept
        while (j < k) {
            // If sum of current triplet is more or equal,
            // move right corner to look for smaller values
            if (arr[i] + arr[j] + arr[k] >= sum) {
                k--;
            // Else move left corner
            } else {
                // This is important. For current i and j, there
                // can be total k-j third elements.
                ans += (k - j);

                for(var l = j; l < k; l++) {
                    console.log('triplets---->', arr[i], arr[l], arr[k])
                }

                j++;
            }
        }
    }

    return ans;
}

var sum = 12;
var arr = [5, 1, 3, 4, 7];
var r = countTriplets(arr, sum);

console.log(r)