//=========== without lib =======

class Stringer  {

    constructor(startStr) {
        this.startStr = BigInt(startStr)
    }

    plus(str) {
        let plusNumber = this.startStr + BigInt(str)
        return plusNumber.toString();
    }
    minus(str) {
        let minusNumber = this.startStr - BigInt(str)
        return minusNumber.toString();
    }
    divide(str) {
        let divideNumber = this.startStr  / BigInt(str)
        return divideNumber.toString();
    }
    multiple(str) {
        let multipleNumber = this.startStr  * BigInt(str)
        return multipleNumber.toString();
    }
}

let test = new Stringer('10000000000000000')

console.log(test.plus(97328473487488383))
console.log(test.minus(1))
console.log(test.divide(2))
console.log(test.multiple(97328473487488383))
console.log(typeof (test.multiple(2)))


///================== with lib =======



// let bigInt = require("big-integer");
//
// class Stringer  {
//
//     constructor(startStr) {
//         this.startStr = bigInt(startStr)
//     }
//
//     plus(str) {
//         let plusNumberStr = this.startStr.add(str)
//         return plusNumberStr.toString()
//     }
//     minus(str) {
//         let minusNumberStr = this.startStr.minus(str)
//         return minusNumberStr.toString()
//     }
//     divide(str) {
//         let divideNumberStr = this.startStr.divide(str)
//         return divideNumberStr.toString()
//     }
//     multiple(str) {
//         let multipleNumberStr = this.startStr.multiply(str)
//         return multipleNumberStr.toString()
//     }
// }

// let test = new Stringer('10000000000000000')

// console.log(test.plus(97328473487488383))
// console.log(test.minus(1))
// console.log(test.divide(2))
// console.log(test.multiple(97328473487488383))
// console.log(typeof (test.multiple(2)))
