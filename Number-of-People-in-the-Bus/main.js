var number = function (busStops) {
    let stopsArr = []

    for (let i = 0; i < busStops.length; i++) {
        let on = busStops[i][0]
        let off = busStops[i][1]
        let stop = on - off
        stopsArr.push(stop)
    }

    let ridersLeft = stopsArr.reduce(
        (previousValue, currentValue) => previousValue + currentValue)

    return ridersLeft
}