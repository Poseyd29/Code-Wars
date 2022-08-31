function maskify(cc) {
    let unmasked = cc.split('')
    for (let i = 0; i < unmasked.length - 4; i++) {
        unmasked[i] = '#'
    }
    return unmasked.join('')
}