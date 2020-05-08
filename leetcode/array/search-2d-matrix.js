// 仔细观察矩阵左下角或者右上角，对于左下角，往右走数字变大，往上走数字变小，
// 那么我们从左下角出发，target比当前值大，我们就往右走，target比当前值小，我们就往上走，若target存在一定会找到
// https://leetcode-cn.com/problems/search-a-2d-matrix-ii/

function searchMatrix(matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0) return false;

    var i = matrix.length - 1;
    var j = 0;
    while (i >= 0 && j < matrix[0].length) {
        if (matrix[i][j] > target) {
            i--;
        } else if (matrix[i][j] < target) {
            j++;
        } else {
            return true;
        }
    }
    return false;
}

var arr = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
];

var r = searchMatrix(arr, 19);

console.log(r);