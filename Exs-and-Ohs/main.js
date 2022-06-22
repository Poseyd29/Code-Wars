function XO(str) {
    let arr = str.split('')
    let oArr = arr.filter(letter => letter === 'o' || letter === 'O')
    let xArr = arr.filter(letter => letter === 'x' || letter === 'X')

    if (oArr.length !== xArr.length) {
        return false
    } else {
        return true
    }
}