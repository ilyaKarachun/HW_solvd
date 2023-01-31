
/* Write a function that adds a number passed to it to an internal sum
 and returns itself with its internal sum set to the new value, so it
 can be chained in a functional manner. Example of usage:
sum(1) //1
sum(1)(2) //2
sum(1)(2)(3)(4)(5)(6)(7) //28 */

function running(total) {
    let summation = function () {
        let sum = total;
        let length = arguments.length;
        for (let i = 0; i < length; i++)
            sum += arguments[i];
        return running(sum);
    }

    summation.valueOf = function () {
        return total;
    };

    return summation;
}

console.log(+running(1));
console.log(+running(1)(2))
console.log(+running(1)(2)(3)(4)(5)(6)(7))


// const sum = (n) => {
//     if (n <= 0) return 0;
//     if (n === 1) return (num) => num;
//
//     let _args = [];
//
//     function helper (...args) {
//         _args = [..._args, ...args];
//         if (_args.length >= n) {
//             args.length = n;
//             return _args.reduce( (acc, num) => acc + num);
//         } else {
//             return helper
//         }
//     }
//
//     return helper
// }
//
// console.log(sum(1)) //1
// console.log(sum(1)(2)) //2
// console.log(sum(1)(2)(3)(4)(5)(6)(7)) //28


/* Write a realisation of a debounce function, here is the specification:
debounce(func, [wait=0])

Creates a debounced function that delays invoking func until after wait
 milliseconds have elapsed since the last time the debounced function
  was invoked. The func is invoked with the last arguments provided to
   the debounced function. Subsequent calls to the debounced function
    return the result of the last func invocation. */

const debounce = ( fn, delay = 0) => {
    return setTimeout( () => {
       return fn()
    }, delay)
}

const sayHi = () => console.log('hi')

// console.log(debounce(sayHi, 3000))
// console.log(debounce(sayHi))
