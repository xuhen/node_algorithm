// https://leetcode-cn.com/problems/merge-sorted-array/

/* 
给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，
使 nums1 成为一个有序数组。
*/

// 双指针 / 从前往后
// 时间复杂度 : O(n + m), 空间复杂度 O(m)
var merge1 = function (nums1, m, nums2, n) {
    var nums1Copy = nums1.slice(0, m);
    var p1 = 0;
    var p2 = 0;
    var p = 0;

    while ((p1 < m) && (p2 < n)) {
        nums1[p++] = (nums1Copy[p1] < nums2[p2]) ? nums1Copy[p1++] : nums2[p2++]
    }
    if (p1 < m) {
        nums1.splice(p1 + p2, m + n - p1 - p2, ...nums1Copy.slice(p1));
    }
    if (p2 < n) {
        nums1.splice(p1 + p2, m + n - p1 - p2, ...nums2.slice(p2))
    }
    return nums1;
};

var nums1 = [1, 2, 3, 0, 0, 0];
var nums2 = [2, 5, 6];

var r = merge1(nums1, 3, nums2, 3);

console.log(r);



// 双指针 / 从后往前
// 时间复杂度 : O(n + m), 空间复杂度 O(1)
var merge2 = function (nums1, m, nums2, n) {

    var p1 = m - 1;
    var p2 = n - 1;

    var p = m + n - 1;

    while ((p1 >= 0) && (p2 >= 0)) {
        nums1[p--] = (nums1[p1] > nums2[p2]) ? nums1[p1--] : nums2[p2--]
    }

    console.log(p1, p2);

    if (p2 >= 0) {
        nums1.splice(0, p2 + 1, ...nums2.slice(0, p2 + 1));
    }

    return nums1;
};

var nums1 = [1, 2, 3, 0, 0, 0, 0, 0];
var nums2 = [-8, -7, 2, 5, 6];

var r = merge2(nums1, 3, nums2, 4);

console.log(r);