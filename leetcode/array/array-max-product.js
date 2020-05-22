// https://leetcode-cn.com/problems/maximum-product-subarray/solution/hua-jie-suan-fa-152-cheng-ji-zui-da-zi-xu-lie-by-g/

/*
遍历数组时计算当前最大值，不断更新
令imax为当前最大值，则当前最大值为 imax = max(imax * nums[i], nums[i])
由于存在负数，那么会导致最大的变最小的，最小的变最大的。因此还需要维护当前最小值imin，imin = min(imin * nums[i], nums[i])
当负数出现时则imax与imin进行交换再进行下一步计算
时间复杂度：O(n)
*/
function maxProduct(nums) {
    var max = Number.MIN_VALUE, imax = 1, imin = 1;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            var tmp = im = imin;
            imin = tmp;
        }
        imax = Math.max(imax * nums[i], nums[i]);
        imin = Math.min(imin * nums[i], nums[i]);


        max = Math.max(max, imax);


    }
    return max;
}


var arr = [2, 3, -2, -6, -1, 4];

var r = maxProduct(arr);

console.log(r);