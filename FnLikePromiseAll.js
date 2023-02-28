function fnLikePromiseAll(promisesArr) {

    return new Promise((resolve, reject) => {
        const results = [];

        for (let i = 0; i < promisesArr.length; i++) {
            promisesArr[i]
                .then((result) => {
                    results[i] = result;

                    if (results.length === promisesArr.length) {
                        resolve(results);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        }
    });
}

// Example for check
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resolved!');
    }, 300000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('Promise 2 resolved!');
        reject('Promise 2 rejected!');
    }, 1000);
})
//     .catch((error) => {
//     console.log(error)
// });

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 3 resolved!');
        // reject('Promise 3 rejected!');
    }, 10000000);
});

console.log(fnLikePromiseAll([promise1, promise2, promise3]))


