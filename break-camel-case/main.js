function solution(string) {
    let newStr = ''
    for (letter of string) {
        if (letter === letter.toUpperCase()) {
            newStr += ' '
            newStr += letter
        } else {
            newStr += letter
        }
    }
    return newStr
}