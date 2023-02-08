// function procedure(n){
//     let newArr = []
//     const divideNumb = 100 / n
//     let plus = n
//    for (let i = 0; i < divideNumb; i++) {
//        let subtractNumb = 0 + plus
//        newArr.push(subtractNumb)
//        plus +=n
//        while (plus >= 100) {
//            break
//        }
//    }
//
//     return  newArr.map(i => ))
// }
//
// console.log(procedure(25))

// String.prototype.repeat = Function.prototype.repeat
//
// console.log(repeat(3))

// function add(a, b) {
//     return (BigInt(a) + BigInt(b)).toString(); // Fix me!
// }
//
// console.log(add('63829983432984289347293874', '90938498237058927340892374089'))

// const os = require('os');
//
// console.log(`Operating System: ${os.type()} ${os.release()}`);
// console.log(`Architecture: ${os.arch()}`);
// console.log(`CPUs: ${os.cpus().length}`);
// console.log(`Total Memory: ${os.totalmem()}`);
// console.log(`Free Memory: ${os.freemem()}`);
// console.log(`Home directory: ${os.homedir()}`);тщву

function highlight(strings, ...values) {
    let str = '';
    strings.forEach((string, i) => {
        str += string + (values[i] || '');
    });
    return str;
}
const name = 'Snickers';
const age = '100';
const sentence = highlight`My dog's name is ${name} and he is ${age} years old`;
console.log(sentence);

