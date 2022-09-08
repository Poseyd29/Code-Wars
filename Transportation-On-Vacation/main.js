function rentalCarCost(d) {
    let eachDay = 40;
    if (d >= 3 && d < 7) {
        return (eachDay * d) - 20
    } else if (d >= 7) {
        return (eachDay * d) - 50
    } else {
        return eachDay * d
    }
}