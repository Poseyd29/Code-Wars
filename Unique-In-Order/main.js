var uniqueInOrder = function (iterable) {
    let newArr = iterable.toString().split('')

    if (Array.isArray(iterable)) {
        newArr = iterable.toString().split(',')
    }

    let filtered = newArr.filter((el, i, arr) => arr[i] !== arr[i - 1]);

    if (Number.parseInt(filtered[0]) === iterable[0]) {
        return filtered.map(x => Number.parseInt(x))
    } else {
        return filtered
    }

}