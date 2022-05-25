function correct(string) {
    let arr = string.split('');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '5') { arr.splice(i, 1, 'S') }
        else if (arr[i] === '0') { arr.splice(i, 1, 'O') }
        else if (arr[i] === '1') { arr.splice(i, 1, 'I') }
    }

    return arr.join('');
}