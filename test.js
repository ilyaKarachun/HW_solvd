// fn fibonacci

function fibonacci(n) {
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
    return result
}

const cacheMap = new Map();

function cachedWithMap(n) {
    cacheMap.set(1,1)
    cacheMap.set(2,1)
    let result
    if (!cacheMap.has(n)) {
            result = fibonacci(n);
            cacheMap.set(n, result)
        }
       return cacheMap.get(n)
}

const cacheWeakMap = new WeakMap();

function cachedWithWeakMap(n) {
    cacheWeakMap.set(Object(1),1)
    cacheWeakMap.set(Object(2),1)
    let objMap = { number: n}
    let result
    if (!cacheWeakMap.has(Object(n))) {
            result = fibonacci(n);

            cacheWeakMap.set(objMap, result)
        }
        cacheWeakMap.get(objMap)
    console.log(objMap)
        return result
}

// fibonacci(100);
// cachedWithMap(100)
// console.log(cacheMap)
//
// cachedWithWeakMap(90)
// console.log(cacheWeakMap.has({ number: 90 } ))
// console.log(cacheWeakMap)
// console.log(Object(1))
// function add(n) {
//     return add(n + 5)
// }
// let arr = []
//
// function test(add) {
//     return  function cached(n) {
//         arr.push(add(n))
//         return arr
//     }
// }
//
// console.log(add(5))
// test(add(5))
// console.log(arr)


