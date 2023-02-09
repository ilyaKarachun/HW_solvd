/* Make a function to calc n-th fibonacci number with caching
the n-th Fibonacci number is the sum of the (n-1)th and the (n-2)th.
 So to calculate the 100th Fibonacci number, for instance, we need to
  compute all the 99 values before it first.
Please do caching in 2 ways, one with Map and one with WeakMap
Later we can see difference in memory */

// Fibonacci fn
function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

// Caching with Map
const cacheMap = new Map();

function fibonacciWithMap(n) {
    if (cacheMap.has(n)) {
        return cacheMap.get(n);
    }

    let result;
    if (n < 2) {
        result = n;
    } else {
        let a = 1;
        result = 1;
        for (let i = 3; i <= n; i++) {
            let c = a + result;
            a = result;
            result = c;
        }
    }
    cacheMap.set(n, result);
    return result;
}



// Caching with WeakMap
const cacheWeakMap = new WeakMap();

function fibonacciWithWeakMap(n) {
    if (cacheWeakMap.has(Object(n))) {
        return cacheWeakMap.get(Object(n));
    }

    let result;
    if (n < 2) {
        result = n;
    } else {
        let a = 1;
        result = 1;
        for (let i = 3; i <= n; i++) {
            let c = a + result;
            a = result;
            result = c;
        }
    }

    cacheWeakMap.set(Object(n), result);
    return result;
}

// fibonacciWithMap(100)
fibonacciWithMap(90)
// fibonacciWithMap(15)
// console.log(fibonacciWithMap(100))
// console.log(fibonacciWithMap(100))
// // console.log(fibonacciWithWeakMap(40))
// console.log("cacheMap ", cacheMap)
fibonacciWithWeakMap(20)
fibonacciWithWeakMap(42)

console.log('cacheWeakMap: ', cacheWeakMap)
console.log('cacheMap: ', cacheMap)
// console.log(fib(100))
