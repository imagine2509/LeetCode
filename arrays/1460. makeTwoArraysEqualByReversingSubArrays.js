/**
 * You are given two integer arrays of equal length target and arr. In one step, you can select
 * any non-empty subarray of arr and reverse it. You are allowed to make any number of steps.
 *
 * Return true if you can make arr equal to target or false otherwise.
 *
 * Example 1:
 *
 * Input: target = [1,2,3,4], arr = [2,4,1,3]
 * Output: true
 * Explanation: You can follow the next steps to convert arr to target:
 * 1- Reverse subarray [2,4,1], arr becomes [1,4,2,3] target = [1,2,3,4]
 * 2- Reverse subarray [4,2], arr becomes [1,2,4,3] target = [1,2,3,4]
 * 3- Reverse subarray [4,3], arr becomes [1,2,3,4] target = [1,2,3,4]
 * There are multiple ways to convert arr to target, this is not the only way to do so.
 * Example 2:
 *
 * Input: target = [7], arr = [7]
 * Output: true
 * Explanation: arr is equal to target without any reverses.
 * Example 3:
 *
 * Input: target = [3,7,9], arr = [3,7,11]
 * Output: false
 * Explanation: arr does not have value 9 and it can never be converted to target.
 *
 *
 * Constraints:
 *
 * target.length == arr.length
 * 1 <= target.length <= 1000
 * 1 <= target[i] <= 1000
 * 1 <= arr[i] <= 1000
 * */

/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
const canBeEqual = (target, arr) => {

    const checkIfEqual = () => {
        const sortedArr = arr.toSorted()
        const sortedTarget = target.toSorted()
        return sortedArr.every((num, index) => num === sortedTarget[index])
    }

    if (!checkIfEqual()) return false

    /** Create a function to reverse subarray starting from the first mismatch index
     * to element from arr equal to target[findMismatch()] */
    const reverseSubArray = (startIndex, endIndex) => {
        const subArray = arr.slice(startIndex, endIndex + 1);
        subArray.reverse();
        arr.splice(startIndex, endIndex - startIndex + 1, ...subArray);
    };

    let i = 0 // init an iterator of arr

    /** Main loop to repeatedly reverse sub-arrays until arr matches target */
    while (i < target.length) { // iterate over each arr element
        /** if we find mismatch we should set index of this mismatch as start index of sub-array */
        if (arr[i] !== target[i]) {
            /** then we begin iterate through arr from this mismatch index + 1 to find the matching value
             * and set it as endIndex */
            for (let j = i + 1; j < target.length; j++) {
                if (arr[j] === target[i]) {
                    reverseSubArray(i, j); // found it, reverse subarray
                    break; // no need to continue the "for" loop
                }
            }
            i++; // increment iterator
        }
        else {
            i++; // If arr[i] equals target[i], move to next index
        }
    }

    // return true cause we already checked for equality
    return true
};

console.log(canBeEqual([1,2,3,4],
    [2,4,1,3])); // Expected output: true
