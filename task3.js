//===== var
const variablesForFn = 30

// arrays
const sortedArr = ascArr(variablesForFn)
const backwardArr = dscArr(variablesForFn)
const randomArr = generateRandomNumbsArr(variablesForFn,variablesForFn)

console.log(sortedArr)
console.log(backwardArr)
console.log(randomArr)

function ascArr( numb ) {
    let ascSortArr = []
    for (let i = 1; i <= numb; i++) {
        ascSortArr.push(i)
    }
    return ascSortArr
}

function dscArr( numb ) {
    let ascSortArr = []
    for (let i = numb; i > 0; i--) {
        ascSortArr.push(i)
    }
    return ascSortArr
}

function generateRandomNumbsArr (count, maxNumb) {
    const newArr = []

    while (newArr.length < count) {
            const randomNumb = Math.ceil(Math.random() * maxNumb)
        if (newArr.indexOf(randomNumb) === -1 ) {
            newArr.push(randomNumb)
        }
    }
    return newArr
}

// ===== bubble sort
const bubbleSort = array => {
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < array.length - i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
};

// ===== quick sort
function quicksort(array) {
    if (array.length <= 1) {
        return array;
    }
    let pivot = array[0];

    let left = [];
    let right = [];

    for (let i = 1; i < array.length; i++) {
        array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }

    return quicksort(left).concat(pivot, quicksort(right));
};

//==== bubble
// console.time()
// console.log('bubble backwardArr: ', bubbleSort( backwardArr)) //9.919ms - 9.785ms - 9.559ms - 9.929ms - 11.093ms
// console.timeEnd()
//
// console.time()
// console.log('bubble sorted: ', bubbleSort( sortedArr)) // 0.097ms -  0.104ms -  0.103ms - 0.215ms - 0.158ms
// console.timeEnd()
//
// console.time()
// console.log('bubble RandomArr: ',bubbleSort(randomArr)) //0.08ms - 0.09ms - 0.2ms - 0.103ms - 0.288ms
// console.timeEnd()
// //
// // //==== quick
// console.time()
// console.log('quick backwardArr: ',quicksort(backwardArr)) // 0.153ms - 0.165ms - 0.159ms -  0.178ms - 0.206ms
// console.timeEnd()
//
// console.time()
// console.log('quick sortedArr: ',quicksort(sortedArr)) // 0.22ms - 0.262ms - 0.238ms - 0.257ms - 0.235ms
// console.timeEnd()
//
// console.time()
// console.log('quick randomArr: ',quicksort(randomArr)) // 0.168ms -  0.205ms -  0.095ms - 0.084ms - 0.304ms
// console.timeEnd()
