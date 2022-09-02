function isIsogram(str) {
    var i, j;
    str = str.toLowerCase();
    for (i = 0; i < str.length; ++i)
        for (j = i + 1; j < str.length; ++j)
            if (str[i] === str[j])
                return false;
    return true;
}

// However this is the best practice from what i have found 

function isIsogram(str) {
    return new Set(str.toUpperCase()).size == str.length;
}