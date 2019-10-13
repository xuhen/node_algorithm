isSubsetSum(set, n, sum) {
    // Base Cases
    if (sum == 0)
        return true;
    if (n == 0 && sum != 0)
        return false;

    // If last element is greater than
    // sum, then ignore it
    if (set[n-1] > sum)
        return isSubsetSum(set, n-1, sum);

    /* else, check if sum can be obtained
    by any of the following
    (a) including the last element
    (b) excluding the last element */
    return isSubsetSum(set, n-1, sum) || isSubsetSum(set, n-1, sum-set[n-1]);
}

var set = [3, 34, 4, 12, 5, 2];
var sum = 9;
var n = set.length;
if (isSubsetSum(set, n, sum) == true)
    console.log("Found a subset with given sum");
else
    console.log("No subset with given sum");