const reverseString = function(word) {
    let initialString = '';
    for (i = word.length - 1; i >= 0; i--) {
        initialString += word[`${i}`];
    };
    return initialString;
};

// Do not edit below this line
module.exports = reverseString;
