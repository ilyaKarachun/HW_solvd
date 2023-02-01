
/* Write a function that adds a number passed to it to an internal sum
 and returns itself with its internal sum set to the new value, so it
 can be chained in a functional manner. Example of usage:
sum(1) //1
sum(1)(2) //2
sum(1)(2)(3)(4)(5)(6)(7) //28 */

function sum(n) {
    const func = x => sum(n + x)
    func.valueOf = () => n
    return func
}

console.log(sum(1).valueOf());
console.log(sum(1)(2).valueOf())
console.log(sum(1)(2)(3)(4)(5)(6)(7).valueOf())

/* Write a realisation of a debounce function, here is the specification:
debounce(func, [wait=0])

Creates a debounced function that delays invoking func until after wait
 milliseconds have elapsed since the last time the debounced function
  was invoked. The func is invoked with the last arguments provided to
   the debounced function. Subsequent calls to the debounced function
    return the result of the last func invocation. */

const debounce = ( fn, delay = 0) => {
    let fnId;
    return (...args) => {
        clearTimeout(fnId)
        fnId = setTimeout(() => fn(...args), delay)
    }
}

const sayHi = debounce (() => console.log('hi'), 1000)

setTimeout(() => sayHi(), 3000)
setTimeout(() => sayHi(), 3100)
setTimeout(() => sayHi(), 10000)
setTimeout(() => sayHi(), 30000)
// console.log(debounce(sayHi))
// setTimeout(() =>console.log(sayHi.toString()), 4000)
