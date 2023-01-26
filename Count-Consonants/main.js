function consonantCount(str) {

    let count = 0;
    str = str.toLowerCase().split('');
    let filtered = []
    for (let j = 0; j < str.length; j++) {
        str[j].split().join()
        let letterCode = str[j].charCodeAt(0)
        console.log(letterCode)
        if (letterCode >= 97 && letterCode <= 122) {
            filtered.push(str[j])

        }

    }

    if (filtered.length === 0) {
        return 0
    }

    for (let i = 0; i < filtered.length; i++) {
        if (filtered[i])
            if (filtered[i] !== 'a' && filtered[i] !== 'e' && filtered[i] !== 'i' && filtered[i] !== 'o' && filtered[i] !== 'u') {
                count++
                console.log(count)
            }
    }

    return count
}