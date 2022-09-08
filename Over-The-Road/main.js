function overTheRoad(address, n) {
    let odd = []
    let even = []
    let numArr = []
    let index;
    for (let i = 1; i < (n * 2) + 1; i++) {
        numArr.push(i)
    }

    console.log(numArr)
    for (let j = 0; j < numArr.length; j++) {
        if (numArr[j] % 2 === 0) {
            even.push(numArr[j])
        } else {
            odd.push(numArr[j])
        }
    }

    odd = odd.sort(function (a, b) { return b - a });
    console.log(even, odd)
    if (address % 2 === 0) {
        index = even.indexOf(address)
    } else {
        index = odd.indexOf(address)
    }

    console.log(index)

    if (address % 2 === 0) {
        return odd[index]
    } else {
        return even[index]
    }
}

// OR ideally below

function overTheRoad(address, n) {
    return (n * 2 + 1) - address;
}