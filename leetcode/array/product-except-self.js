// https://leetcode-cn.com/problems/product-of-array-except-self/

/*
给你一个长度为 n 的整数数组 nums，其中 n > 1，
返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i]
之外其余各元素的乘积。
*/

const productExceptSelf = function (nums) {
    const L = [];
    const R = [];
    const len = nums.length;

    for (let i = 0; i < len; i++) {
        if (i === 0) {
            L[i] = 1;
        } else {
            L[i] = nums[i - 1] * L[i - 1];

        }
    }

    for (let j = len - 1; j >= 0; j--) {
        if (j === len - 1) {
            R[j] = 1;
        } else {
            R[j] = R[j + 1] * nums[j + 1]
        }
    }

    return nums.map((item, i) => {
        return L[i] * R[i];
    })

};


const a = [1, 2, 3, 4];
const r = productExceptSelf(a);
console.log(r)