function giveChange(amount) {
    let one = 0
    let five = 0
    let ten = 0
    let twenty = 0
    let fifty = 0
    let hundred = 0

    while (amount > 0) {
        if (amount >= 100) {
            amount -= 100
            hundred++
        } else if (amount >= 50 && amount < 100) {
            amount -= 50
            fifty++
        } else if (amount >= 20 && amount < 50) {
            amount -= 20
            twenty++
        } else if (amount >= 10 && amount < 20) {
            amount -= 10
            ten++
        } else if (amount >= 5 && amount < 10) {
            amount -= 5
            five++
        } else {
            amount -= 1
            one++
        }
    }

    const arr = [one, five, ten, twenty, fifty, hundred]
    return arr

}