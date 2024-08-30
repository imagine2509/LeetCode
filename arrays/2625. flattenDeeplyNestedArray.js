/** Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

 A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

 A flattened array is a version of that array with some or all of the sub-arrays removed and replaced
 with the actual elements in that sub-array. This flattening operation should only be done if the current
 depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.

 Please solve it without the built-in Array.flat method. */

/**
 * @param {Array} arr
 * @param {number} n
 * @return {Array}
 */
/**
 * @param {Array} arr
 * @param {number} n
 * @return {Array}
 */
const flat = (arr, n) => {
    const res = [];

    // Function to recursively flatten the array
    const flatten = (currentArr, currentDepth) => {
        for (let item of currentArr) {
            if (Array.isArray(item) && currentDepth > 0) {
                // Recursively flatten sub-arrays if we haven't reached the limit
                    flatten(item, currentDepth - 1);
            } else {
                // Add non-array items to the result
                res.push(item);
            }
        }
    }
    // Start the flattening process
    flatten(arr, n);

    return res;
}

console.log('final: ', flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1))
// [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]