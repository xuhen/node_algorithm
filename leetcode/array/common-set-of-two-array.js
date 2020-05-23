// https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/
/*
    给定两个数组，找出他们公共的元素并输出

    思路： 先分别对两个数组排序，然后用双指针移动比较
*/
var intersect = function (nums1, nums2) {
    const result = [];
    nums1.sort((a, b) => {
        return a - b;
    })
    nums2.sort((a, b) => {
        return a - b;
    })
    let j = 0;
    let i = 0;
    const len1 = nums1.length;
    const len2 = nums2.length;

    while (i < len1 && j < len2) {
        if (nums1[i] < nums2[j]) {
            i++;
        } else if (nums1[i] > nums2[j]) {
            j++;
        } else {
            result.push(nums1[i]);
            i++;
            j++;
        }
    }
    return result;
};

var nums1 = [1, 2, 2, 1], nums2 = [2, 2];

var r = intersect(nums1, nums2);
console.log(r);