function longest(s1, s2) {

    const str = s1.concat('', s2)

    let convertStr = str.split('').sort()

    let filteredStr = convertStr.filter((val, index, src) => {
        return src.indexOf(val) == index
    }).join('')

    return filteredStr
}
