class EDIST {
    min(x, y, z) {
        if (x<=y && x<=z) return x;
        if (y<=x && y<=z) return y;
        else return z;
    }

    editDist(str1, str2 , m , n) {
        // If first string is empty, the only option is to
        // insert all characters of second string into first
        if (m == 0) return n;

        // If second string is empty, the only option is to
        // remove all characters of first string
        if (n == 0) return m;

        // If last characters of two strings are same, nothing
        // much to do. Ignore last characters and get count for
        // remaining strings.
        if (str1.charAt(m-1) == str2.charAt(n-1))
            return this.editDist(str1, str2, m-1, n-1);

        // If last characters are not same, consider all three
        // operations on last character of first string, recursively
        // compute minimum cost for all three operations and take
        // minimum of three values.
        return 1 + this.min ( this.editDist(str1,  str2, m, n-1),    // Insert
                        this.editDist(str1,  str2, m-1, n),   // Remove
                        this.editDist(str1,  str2, m-1, n-1) // Replace
                    );
    }
}


var str1 = "sunday";
var str2 = "saturday";

var ed = new EDIST();

console.log( ed.editDist(str1 , str2 , str1.length, str2.length) );

