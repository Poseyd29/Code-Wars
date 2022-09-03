function last(x) {
    return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}

//OR

const lastChar = (str) => (str[str.length - 1] || '');
const sorter = (a, b) => lastChar(a).localeCompare(lastChar(b));
const last = (str) => str.split(' ').sort(sorter);