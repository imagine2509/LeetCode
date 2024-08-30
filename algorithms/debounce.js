/** Given a function fn and a time in milliseconds t, return a debounced version of that function.

 A debounced function is a function whose execution is delayed by t milliseconds and whose
 execution is cancelled if it is called again within that window of time.
 The debounced function should also receive the passed parameters.

 For example, let's say t = 50ms, and the function was called at 30ms, 60ms, and 100ms.

 The first 2 function calls would be cancelled, and the 3rd function call would be executed at 150ms.

 If instead t = 35ms, The 1st call would be cancelled, the 2nd would be executed at 95ms, and the 3rd would be executed at 135ms. */

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timeoutId = null; // variable in outer scope to make a closure and static timeout
    return function(...args) {
        // clear timeout on each call of inner function to prevent call before timeout passed after last call
        clearTimeout(timeoutId);
        // set closured variable to new timeout and after timeout passed call a function
        timeoutId = setTimeout(() => {
            fn(...args);
        }, t);
    };
};


 const log = debounce(console.log, 100);
 log('Hello'); // cancelled
 log('Hello'); // cancelled
 log('Hello'); // Logged at t=100ms