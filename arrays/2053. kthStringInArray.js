/** https://leetcode.com/problems/kth-distinct-string-in-an-array/description/?envType=daily-question&envId=2024-08-05
 *
 * A distinct string is a string that is present only once in an array.
 *
 * Given an array of strings arr, and an integer k, return the
 * kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".
 *
 * Note that the strings are considered in the order in which they appear in the array.
 *
 *
 * Example 1:
 *
 * Input: arr = ["d","b","c","b","c","a"], k = 2
 * Output: "a"
 * Explanation:
 * The only distinct strings in arr are "d" and "a".
 * "d" appears 1st, so it is the 1st distinct string.
 * "a" appears 2nd, so it is the 2nd distinct string.
 * Since k == 2, "a" is returned.
 * Example 2:
 *
 * Input: arr = ["aaa","aa","a"], k = 1
 * Output: "aaa"
 * Explanation:
 * All strings in arr are distinct, so the 1st string "aaa" is returned.
 * Example 3:
 *
 * Input: arr = ["a","b","a"], k = 3
 * Output: ""
 * Explanation:
 * The only distinct string is "b". Since there are fewer than 3 distinct strings, we return an empty string "".*/

/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
const kthDistinct = (arr, k) => {
    let dStr = '' // resulting variable
    let i = 1 // iterator for count to K
    let j = 0 // loop iterator
   while (i <= k && j <= arr.length + 1) {
       if (arr.indexOf(arr[j]) === arr.lastIndexOf(arr[j])) { // this condition makes the string distinct
           dStr = arr[j] // if it's distinct we replace result var with the value
           i += 1 // and increment iterator to K
       }
       j += 1 // always increment loop iterator
   }
   return dStr || '' // return last value or ""
};

/** on each iteration of while (which is linear to K = O(n)) we iterate over array 2 times
 * (for both indexOf (linear) and lastIndexOf (linear)) so the time complexity will be O(n^2)
 * but i personally think my approach is easier in understanding*/

console.log(kthDistinct(["d","b","c","b","c","a"], 2)) // "a"
console.log(kthDistinct(["aaa","aa","a"], 1)) // 'aaa'
console.log(kthDistinct(["a","b","a"], 3)) // ""

/** My solution is not the best in performance, let's analyze best one
 *
 * var kthDistinct = function(arr, k) {
 *     let map = {}; // initialize hashmap
 *     for(let str of arr) {
 *         if(!map[str])   map[str] = 1;
 *         else    map[str]++;
 *     } // create hashmap from array
 *
 *     for(let str of arr) {
 *         if(map[str] > 1)    continue; // skip all not distinct strings
 *
 *         if(k === 1) return str; // we make early return if K === 1 which means we found our string
 *         k--; // always decrement key
 *     }
 *
 *     return ""; // if didn't find our string we'll return ""
 * };
 *
 * so on first iteration we create a hash map (linear) and on second iteration we replace string
 * and time complexity will be O(2*n) = O(n)
 *
 * */