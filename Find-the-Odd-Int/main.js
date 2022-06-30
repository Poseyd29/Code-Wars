function findOdd(A) {
    let count = {}
    let highNum = Math.max(...A)
    let lowNum = Math.min(...A)

    A.forEach(element => {
        count[element] = (count[element] || 0) + 1;
    });

    if (A.length === 1) {
        return A[0]
    }

    for (let i = lowNum; i <= highNum; i++) {
        if (count[i] === undefined) {
            continue
        }
        else if (count[i] > 0 && count[i] % 2 !== 0) {
            console.log(i)
            return i
        }
    }
}