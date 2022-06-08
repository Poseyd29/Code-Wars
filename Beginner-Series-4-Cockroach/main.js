function cockroachSpeed(s) {
    let centimeter = s
    const kiloConverted = centimeter * 100000
    const kiloPerMinute = kiloConverted / 60
    const cps = kiloPerMinute / 60

    return Math.floor(cps)
}