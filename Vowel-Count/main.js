function getCount(str) {
    let vowelsCount = 0;

    for (let i = 0; i < str.length; i++) {
        let letter = str.charAt(i)
        if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
            vowelsCount++
        }
    }
    return vowelsCount
}