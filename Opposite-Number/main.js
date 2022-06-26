function opposite(number) {
    if (Math.sign(number) === 0) {
        return number
    } else if (Math.sign(number) === 1) {
        return -Math.abs(number)
    } else {
        return Math.abs(number)
    }
}