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

// university fn for cashing

function cashFunction(fn) {
    const cash = {}
    return function (n) {
        if (cash[n]) {
            console.log('result take from cash, ', cash[n])
            return cash[n]
        }
        let result = fn(n)
        cash[n] = result
        console.log('execute without cashing, ', result)
        return result
    }
}

function cashWithMapFunction(fn) {
    const cash = new Map()
    return function (n) {
        if (cash.has(n)) {
            console.log('result take from cash, ', cash[n])
            return cash.get(n)
        }
        let result = fn(n)
        cash.set(n, result)
        console.log('execute without cashing, ', result)
        return cash.get(n)
    }
}

function cashWithWeakMapFunction(fn) {
    const cash = new WeakMap()
    return function (n) {
        if (cash.has(Object(n))) {
            console.log('result take from cash, ', cash[n])
            return cash.get(Object(n))
        }
        let result = fn(n)
        cash.set(Object(n), result)
        console.log('execute without cashing, ', result)
        return cash.get(Object(n))
    }
}

// const cashFibonacci = cashFunction(fibonacci)
// cashFibonacci(6) //execute without cashing
// cashFibonacci(8) //execute without cashing
// cashFibonacci(6) //result take from cash,  8
// cashFibonacci(8)
// cashFibonacci(10) //execute without cashing
// cashFibonacci(9)
// cashFibonacci(10) // result take from cash,  55

// const cashWithMapFibonacci = cashWithMapFunction(fibonacci)
// cashWithMapFibonacci(6)
// cashWithMapFibonacci(8)
// cashWithMapFibonacci(6)
// cashWithMapFibonacci(8)
// cashWithMapFibonacci(10)
// cashWithMapFibonacci(9)
// cashWithMapFibonacci(10)

const cashWithWeakMapFibonacci = cashWithWeakMapFunction(fibonacci)
cashWithWeakMapFibonacci(6)
cashWithWeakMapFibonacci(8)
cashWithWeakMapFibonacci(6)
cashWithWeakMapFibonacci(8)
cashWithWeakMapFibonacci(10)
cashWithWeakMapFibonacci(9)
cashWithWeakMapFibonacci(10)

/*

 */
