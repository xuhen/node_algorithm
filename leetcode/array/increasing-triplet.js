// https://leetcode-cn.com/problems/increasing-triplet-subsequence/

/*
给定一个未排序的数组，判断这个数组中是否存在长度为 3 的递增子序列。

数学表达式如下:

如果存在这样的 i, j, k,  且满足 0 ≤ i < j < k ≤ n-1，
使得 arr[i] < arr[j] < arr[k] ，返回 true ; 否则返回 false 。

*/

var increasingTriplet = function (nums) {
    const len = nums.length;
    let min1 = Number.MAX_SAFE_INTEGER,
        min2 = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < len; i++) {
        if (nums[i] <= min1) {
            min1 = nums[i];
        } else if (nums[i] <= min2) {
            min2 = nums[i];
        } else {
            return true;
        }
    }
    return false;
};

var a = [5, 1, 5, 5, 2, 5, 4];

var r = increasingTriplet(a);
console.log(r);