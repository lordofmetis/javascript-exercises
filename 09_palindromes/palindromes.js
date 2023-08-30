const palindromes = function (word) {
    const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ ';

    let newWord = ''; 

    for (let character of word) {
        if (!punctuation.includes(character)) {
            newWord += character;
        }
    }

    newWord = newWord.toLowerCase();

    for (let i = 0; i < newWord.length / 2; i++) {
        if (newWord[i] !== newWord[newWord.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
