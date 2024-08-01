// https://leetcode.com/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums1 (nums1.length === m + n) array is sorted
 * @param {number} m (nums1.length without zero elements)
 * @param {number[]} nums2 (nums2.length === n) array is sorted
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

const merge = function(nums1, m, nums2, n) {
   let i = m - 1; // iterator of first array
   let j = n - 1; // iterator of second array
   let k = m + n - 1; // iterator of our position

   /** Now we need to iterate through all zeros and fill them with numbers
    * from second array that > then last element of first array
    * Then we need to switch places of every element in first array
    * which is > our first element in second array that less than last element in second
    * When we iterate through all numbers in second array we need to end the loop
    * You can see the example of such loop below*/

   while (j >= 0) { // ends when second array iterator equals -1
      if (i >= 0 && nums1[i] > nums2[j]) {
      /** here we swap place of element in arr1
       * that is bigger than iterable element in arr2 */
         nums1[k] = nums1[i];
         i -= 1;
      } else {
         /** here we put element from arr2 to our position */
         nums1[k] = nums2[j];
         j -= 1;
      }
      k -= 1; // always switch position to next
   }
   /**
    * 6 > 0 => nums1[5] = nums2[2] => [1,2,3,0,0,6] => k - 1 && j - 1 (k=4, j=1, I=2)
    * 5 > 0 => nums1[4] = nums2[1] => [1,2,3,0,5,6] => k-1 && j-1 (k=3, j=0, I=2)
    * 3 > 2 => nums1[3] = nums1[2] => [1,2,3,3,5,6] => I-1 && k-1 (k=2, j=0, I=1)
    * 2 = 2 => nums1[2] = nums2[0] => [1,2,2,3,5,6] => k-1 && j-1 (=-1 => end of loop)
    * */
};

merge([1,2,3,0,0,0], 3, [2,5,6], 3)

/** A little note for curious ones
 * Most effective solution by runtime is
 *
 * var merge = function(nums1, m, nums2, n) {
 *     for(let i = m; i < nums1.length; i++) {
 *         nums1[i] = nums2.shift();
 *     }
 *
 *     return nums1.sort((a, b) => a - b);
 * };
 *
 * so don't be scared to use sort method
 * sometimes quicksort beats any algorithm
 * especially if we have little amount of data:)
 * */