/* Make a function to calc n-th fibonacci number with caching
the n-th Fibonacci number is the sum of the (n-1)th and the (n-2)th.
 So to calculate the 100th Fibonacci number, for instance, we need to
  compute all the 99 values before it first.
Please do caching in 2 ways, one with Map and one with WeakMap
Later we can see difference in memory */

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
    console.log(cacheWeakMap)
    let searchEl = {'bl': n }
    console.log(cacheWeakMap.get(searchEl))
    if (cacheWeakMap.has(searchEl)) {
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

    cacheWeakMap.set({'bl': n }, result);
    return result;
}

// fibonacciWithMap(100)
fibonacciWithMap(90)
fibonacciWithMap(12)
// fibonacciWithMap(12)
// fibonacciWithMap(15)
// console.log(fibonacciWithMap(100))
// console.log(fibonacciWithMap(100))
// // console.log(fibonacciWithWeakMap(40))
// console.log("cacheMap ", cacheMap)
// fibonacciWithWeakMap(20)
// fibonacciWithWeakMap(20)
// fibonacciWithWeakMap(40)
// fibonacciWithWeakMap(30)
// fibonacciWithWeakMap(20)
// console.log('cacheWeakMap: ', cacheWeakMap.get( Object(20) ))
//
// console.log('cacheWeakMap: ', cacheWeakMap.get({[[PrimitiveValue]]: 20}))
console.log('cacheMap: ', cacheMap)
// console.log('cacheMap: ', cacheMap.has(12))
// console.log(fib(100))


// function cache(fn) {
//     const cache = []
//     return function cached(n) {
//         if (!cache[n]) {
//             let result = fn(n)
//             cache[n] = result
//         }
//         return cache[n]
//     }
// }
//
// console.log(cache(fibonacci(5)))
