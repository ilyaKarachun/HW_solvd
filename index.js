//======== with algorithm ====

class Stringer  {

    constructor(startStr) {
        this.startStr = startStr
    }

    plus(str) {
        const AL = this.startStr.length  //var for length first number
        const BL = str.length  // var for length sec num
        const ML = Math.max(AL, BL)  //choose the bigger num
        let carry = 0, sum = '' // make new var
        for (let i = 1; i <= ML; i++) {
            let a = +this.startStr.charAt(AL - i)
            let b = +str.charAt(BL - i)

            let t = carry + a + b
            carry = t/10 |0
            t %= 10

            sum = (i === ML && carry)
                ? carry*10 + t + sum
                : t + sum
        }

        return sum
        }
}

let test = new Stringer('10000000000000000')

console.log(test.plus('97328473487488383'))
// console.log(test.divide('2'))

//=========== without lib =======

// class Stringer  {
//
//     constructor(startStr) {
//         this.startStr = BigInt(startStr)
//     }
//
//     plus(str) {
//         let plusNumber = this.startStr + BigInt(str)
//         return plusNumber.toString();
//     }
//     minus(str) {
//         let minusNumber = this.startStr - BigInt(str)
//         return minusNumber.toString();
//     }
//     divide(str) {
//         let divideNumber = this.startStr  / BigInt(str)
//         return divideNumber.toString();
//     }
//     multiple(str) {
//         let multipleNumber = this.startStr  * BigInt(str)
//         return multipleNumber.toString();
//     }
// }
//
// let test = new Stringer('10000000000000000')
//
// console.log(test.plus(9732847348748)) //
// console.log(test.minus(1))
// console.log(test.divide(2))
// console.log(test.multiple(97328473487488383))
// console.log(typeof (test.multiple(2)))


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
//
// let test = new Stringer('10000000000000000')
//
// console.log(test.plus(97328473487488383))
// console.log(test.minus(1))
// console.log(test.divide(2))
// console.log(test.multiple(97328473487488383))
// console.log(typeof (test.multiple(2)))
