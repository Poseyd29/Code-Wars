// blank space before z counts as index[0]
const alpha = ' zyxwvutsrqponmlkjihgfedcba!? '
// x is the array of numbers being passed in from test cases
const switcher = x => x.map(item => alpha[item]).join('')
// mapping through numbers in array and the numbers become item, item is passed as an index for alpha ex: alpha[item] and its converted to letter 


// OR

function switcher(x) {
    return x.map(a => {
        if (a == 27) return "!";
        if (a == 28) return "?";
        if (a == 29) return " ";
        return String.fromCharCode(97 + 26 - parseInt(a));

    }).join('');
}