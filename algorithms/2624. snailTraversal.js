/** Write code that enhances all arrays such that you can call the snail(rowsCount, colsCount)
 * method that transforms the 1D array into a 2D array organised in the pattern known as snail traversal order.
 * Invalid input values should output an empty array. If rowsCount * colsCount !== nums.length, the input is considered invalid.

 Snail traversal order starts at the top left cell with the first value of the current array.
 It then moves through the entire first column from top to bottom, followed by moving to the next column
 on the right and traversing it from bottom to top. This pattern continues, alternating the direction
 of traversal with each column, until the entire current array is covered.
 For example, when given the input array [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]
 with rowsCount = 5 and colsCount = 4, the desired output matrix is shown below.
 Note that iterating the matrix following the arrows corresponds to the order of numbers in the original array. */

/** Example 1:

 Input:
 nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]
 rowsCount = 5
 colsCount = 4
 Output:
 [
 [19,17,16,15],
 [10,1,14,4],
 [3,2,12,20],
 [7,5,18,11],
 [9,8,6,13]
 ]
 */

/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
    if (rowsCount * colsCount !== this.length) {
        return []
    } // base case 1 to return [] on invalid values
    if (rowsCount === 1) {
        return new Array(this)
    } // base case 2 if we should return 1-dimensional array

    let iterator = 0
    let result = [];
    for (let i = 0; i < rowsCount; i++) {
        result.push([]);
    } // create empty rows arrays

    let rowIter = 0
    let colIter = 0
    let direction = 0 // 0 - down, 1 - right, 2 - up

    while (iterator < this.length) {
        result[rowIter][colIter] = this[iterator] // add value by index
        switch (direction) {
            case 0: // down
                if (rowIter < rowsCount - 1) { // until we get to last row
                    rowIter += 1
                } else {
                    colIter += 1 // row is the same, switch column
                    direction = 1 // and direction
                }
                break
            case 1: // right
                if (rowIter === rowsCount - 1) { // if we are on bottom element
                    rowIter -= 1 // switch row backwards because will fill the element
                    direction = 2 // switch direction
                } else {
                    direction = 0 // reversed
                    rowIter += 1
                }
                break
            case 2:
                if (rowIter !== 0) { // until we reach top
                    rowIter -= 1 // switch row backwards
                }
                else {
                    colIter += 1 // switch column to next one
                    direction = 1 // and direction to right
                }
                break
        }
        iterator += 1
    }
    return result
}

/** beats 87% of leetcode solutions */


// const arr = [1,2,3,4];
// console.log(arr.snail(1,4)) // [[1,2,3,4]]
const  nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]
console.log(nums.snail(5, 4))
/** Output:
 [
 [19,17,16,15],
 [10,1,14,4],
 [3,2,12,20],
 [7,5,18,11],
 [9,8,6,13]
 ] */
