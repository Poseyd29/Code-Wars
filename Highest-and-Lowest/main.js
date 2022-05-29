function highAndLow(numbers) {

    const commaAdded = numbers.replace(/ /g, ',')
    const newArr = commaAdded.split(',')

    let arr = newArr.map(element => {
        return Number(element);
    })

    function lowest() {
        let sortedArr = arr.sort(function (a, b) { return a - b })
        return sortedArr[0]
    }

    function highest() {
        let reverseArr = arr.sort(function (a, b) { return b - a })
        return reverseArr[0]
    }

    let result = [highest(), lowest()]
    let solution = result.join(' ')

    return solution

}