//======== with algorithm ====

class Stringer  {

    constructor(startStr) {
        this.startStr = startStr
    }

    plus(str) {
        const startStrLength = this.startStr.length  //var for length first number
        const strLength = str.length  // var for length sec num
        const maxLength = Math.max(startStrLength, strLength)  //choose the bigger length for iter
        let carry = 0, sum = '' // make new var. Sum for make string again.
        for (let i = 1; i <= maxLength; i++) {
            let a = +this.startStr.charAt(startStrLength - i) // reverse string
            let b = +str.charAt(strLength - i)  // reverse string
            // console.log(b) //9 9 0
            // console.log(a) //3 2 1
            console.log(carry) // 0 1 1
            let t = carry + a + b

            carry = t/10 | 0
            t %= 10
            sum = (i === maxLength && carry)
                ? carry*10 + t + sum
                : t + sum
        }

        return sum
        }
    minus(str) {

        // Take an empty string for
        // storing result
        let sum = "";

        // Calculate lengths of both string
        let n1 = this.startStr.length, n2 = str.length;
        let diff = n1 - n2;

        // Initially take carry zero
        let carry = 0;

        // Traverse from end of both strings
        for (let i = n2 - 1; i >= 0; i--) {
            // Do school mathematics, compute
            // difference of current digits and carry
            let sub = ((this.startStr[i + diff].charCodeAt() - '0'.charCodeAt()) - (str[i].charCodeAt() - '0'.charCodeAt()) - carry);
            if (sub < 0) {
                sub = sub + 10;
                carry = 1;
            }
            else
                carry = 0;

            sum += sub.toString();
        }

        // subtract remaining digits of str1[]
        for (let i = n1 - n2 - 1; i >= 0; i--) {
            if (this.startStr[i] === '0' && carry > 0) {
                sum += "9";
                continue;
            }
            let sub = ((this.startStr[i].charCodeAt() - '0'.charCodeAt()) - carry);
            if (i > 0 || sub > 0) // remove preceding 0's
                sum += sub.toString();
            carry = 0;
        }

        // reverse resultant string
        let aa = sum.split('');
        aa.reverse();
        return aa.join("");
    }
    multiple(str) {
            if (this.startStr === "0" || str === "0") {
                return "0";
            }
            let firstNumber = [...this.startStr];
            let secondNumber = [...str];

            // Reverse both the numbers.
            firstNumber.reverse();
            secondNumber.reverse();

            // To store the multiplication result of each digit of secondNumber with firstNumber.
            let N = firstNumber.length + secondNumber.length;
            let answer = new Array(N).fill(0);

            for (let place2 = 0; place2 < secondNumber.length; place2++) {
                let digit2 = Number(secondNumber[place2]);

                // For each digit in secondNumber multiply the digit by all digits in firstNumber.
                for (let place1 = 0; place1 < firstNumber.length; place1++) {
                    let digit1 = Number(firstNumber[place1]);

                    // The number of zeros from multiplying to digits depends on the
                    // place of digit2 in secondNumber and the place of the digit1 in firstNumber.
                    let currentPos = place1 + place2;

                    // The digit currently at position currentPos in the answer string
                    // is carried over and summed with the current result.
                    let carry = answer[currentPos];
                    let multiplication = digit1 * digit2 + carry;

                    // Set the ones place of the multiplication result.
                    answer[currentPos] = multiplication % 10;

                    // Carry the tens place of the multiplication result by
                    // adding it to the next position in the answer array.
                    answer[currentPos + 1] += Math.floor(multiplication / 10);
                }
            }

            if (answer[answer.length - 1] === 0) {
                answer.pop();
            }

            // Ans is in the reversed order.
            // Reverse it to get the final ans.
            answer.reverse();
            return answer.join('');
    }
    divide(str) {
        let ans="";

        // We will be iterating
        // the dividend so converting
        // it to char array

        // Initially the carry
        // would be zero
        let idx = 0;
        let temp=this.startStr[idx]-'0';
        while (temp < str)
        {
            temp = (temp * 10 +
                (this.startStr[idx + 1]).charCodeAt(0) -
                ('0').charCodeAt(0));
            idx += 1;
        }
        idx += 1;

        while(this.startStr.length>idx)
        {
            // Store result in answer i.e. temp / divisor
            ans += String.fromCharCode
            (Math.floor(temp / str) +
                ('0').charCodeAt(0));

            // Take next digit of number
            temp = ((temp % str) * 10 +
                (this.startStr[idx]).charCodeAt(0) -
                ('0').charCodeAt(0));
            idx += 1;
        }

        ans += String.fromCharCode
        (Math.floor(temp / str) +
            ('0').charCodeAt(0));

        //If divisor is greater than number
        if(ans.length === 0)
            return "0";
        //else return ans
        return ans;
    }
}
// let test = new Stringer('10928332974734932898422')

// console.log(test.plus('99'))
// console.log(test.minus('1092833297473493289842'))
// console.log(test.multiply('2'))
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
let test = new Stringer('120')

console.log(test.plus('97328473487488383'))
console.log(test.minus('105'))
console.log(test.divide('2'))
console.log(test.multiple('97328473487488383'))
console.log(typeof (test.multiple('2')))
