class LongestCommonSubsequence {
    /* Returns length of LCS for X[0..m-1], Y[0..n-1] */
  lcs(X, Y, m, n ) {
    if (m == 0 || n == 0)
      return 0;

    if (X[m-1] == Y[n-1]) {
        return 1 + this.lcs(X, Y, m-1, n-1);
    } else {
        return this.max(this.lcs(X, Y, m, n-1), this.lcs(X, Y, m-1, n));
    }
  }

  max(a, b) {
    return (a > b) ? a : b;
  }
}


var lcs = new LongestCommonSubsequence();
var s1 = "AGGTAB";
var s2 = "GXTXAYB";

var X = s1.split('');
var Y = s2.split('');
var m = X.length;
var n = Y.length;

console.log("Length of LCS is" + " " + lcs.lcs( X, Y, m, n ))