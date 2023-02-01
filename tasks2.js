
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

    fnId = () => setTimeout(() => {
        return fn()
    }, delay)

    clearInterval(fnId)
    console.log(fnId.toString())
    return fnId()

}

const sayHi = () => console.log('hi')

console.log(debounce(sayHi, 3000))
console.log(debounce(sayHi))
