const sortedArr = [ 1, 2]
const backwardArr = [ 2, 1]
const variablesForFn = 2
const randomArr = generateRandomNumbsArr(variablesForFn,variablesForFn)

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
console.time()
console.log('bubble backwardArr: ', bubbleSort( backwardArr)) //9.919ms
console.timeEnd()

console.time()
console.log('bubble sorted: ', bubbleSort( sortedArr)) // 0.097ms
console.timeEnd()

console.time()
console.log('bubble RandomArr: ',bubbleSort(randomArr)) //0.08ms
console.timeEnd()

//==== quick
console.time()
console.log('quick backwardArr: ',quicksort(backwardArr)) // 0.153ms
console.timeEnd()

console.time()
console.log('quick sortedArr: ',quicksort(sortedArr)) // 0.22ms
console.timeEnd()

console.time()
console.log('quick randomArr: ',quicksort(randomArr)) // 0.168ms
console.timeEnd()
