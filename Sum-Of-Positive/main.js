function positiveSum(arr) {
    const init = 0
    let filtered = arr.filter(num => Math.sign(num) === 1)
    let total = filtered.reduce((prev, current, init) => prev + current, init)

    if (arr === [] || filtered === []) {
        return 0
    } else {
        return total
    }
}