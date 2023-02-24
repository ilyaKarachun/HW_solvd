function recursion(val) {
    if (val === 1) {
        return 1
    }

    return val + recursion(val - 1)
}

console.log(recursion(10))
