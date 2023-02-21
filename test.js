 function someFn() {
     console.log(arguments)
 }

 function secondFn() {
     console.log(arguments)
 }

Function.prototype.delay = function (delay) {

    return function (...args) {
        setTimeout(() => {
            this(...args)
        }, delay)
    }.bind(this)
}

 const someFnWith4000delay = someFn.delay(2000)
 someFnWith4000delay(1,['dsd'], 2, '50')

 // class DelayFN {
    //     constructor(fn) {
    //         this.fn = fn
    //     }
    //     delay(timer) {
    //         setTimeout((args) => {
    //             this.fn(args)
    //         }, timer)
    //     }
    // }
    //
    // function someFn() {
    //     console.log(arguments)
    // }
    //
    // const someFnWithDelay = new DelayFN(someFn(1,['dsd'], 2, '43'))
    //
    // someFnWithDelay.delay(5000)

// const someFnWithDelay = (fn, delay) => {
//     const timer = setTimeout(() => {
//         fn()
//     }, delay)
//     return clearTimeout(timer)
// }

// someFn(1,['dsd'], 2, '43')

// someFnWithDelay(someFn(1,['dsd'], 2, '43'), 10000)

// const binaryTree = {
//     value: 6,
//     left: {
//         value: 5,
//         left: {
//             value: 3,
//             left: {
//                 value: 1
//             }
//         },
//         right: {
//             value: 7
//         }
//     },
//     right: {
//         value: 10,
//         left: {
//             value: 4
//         },
//         right: {
//             value: 5
//         }
//     }
// }
//
// function sumTree(tree) {
//     let sum = tree.value
//
//     if (tree.left) {
//         sum += sumTree(tree.left)
//     }
//     if (tree.right) {
//         sum += sumTree(tree.right)
//     }
//
//     return sum
// }
//
// console.log(sumTree(binaryTree))
