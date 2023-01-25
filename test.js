console.log( 0 || 1 && 2 ||3 )

// let first = '893427328497983427893248932498034289324';
// let second = '234859234879342897893427893274';

// if (first.length >= second.length) {
//     console.log(findSum(first, second));
// } else {
//     findSum(second, first);
// }

// function findSum(first, second) {
//     let sum = '';
//     let carry = 0;
//     let diff = second.length - first.length;
//     for (let i = first.length - 1; i >= 0; i--) {
//         let temp =
//             (Number(first.charAt(i)) % 10) +
//             (Number(second.charAt(i + diff)) % 10) +
//             carry;
//         if (temp >= 10) {
//             sum = (temp % 10) + sum;
//             carry = Math.floor(temp / 10);
//         } else {
//             sum = temp + sum;
//             carry = 0;
//         }
//     }
//     if (carry) {
//         sum = carry + sum;
//     }
//     return sum;
// }
//
// console.log(findSum( '97328473487488383', '10000000000000000'))