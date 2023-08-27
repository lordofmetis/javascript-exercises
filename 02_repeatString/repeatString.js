const repeatString = function(string, num) {
    let initialString = '';
    if (num >= 0) {
        for (let i = 1; i <= num; i++) {
            initialString = initialString.concat(string);
        };
        return initialString;
    }
    else {
        return "ERROR";
    }
}; 

// Do not edit below this line
module.exports = repeatString;
