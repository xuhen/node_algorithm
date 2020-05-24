// https://leetcode-cn.com/problems/longest-common-prefix/submissions/

/*
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""
*/

var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return '';
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        while (j < prefix.length && j < strs[i].length) {
            if (prefix[j] !== strs[i][j]) {
                break;
            }
            j++;
        }
        prefix = prefix.slice(0, j);
        if (prefix === '') {
            return prefix;
        }
    }

    return prefix;
};


var a = ["flower", "flow", "flight"];

var r = longestCommonPrefix(a);

console.log(r);