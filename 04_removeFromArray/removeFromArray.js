const removeFromArray = function(myArray, ...moreElements) {
    const yourArray = [];
    myArray.forEach(element => {
        if (myArray.includes(element) && (!moreElements.includes(element))) {
            yourArray.push(element);
        } 
    });
    return yourArray;
};

// Do not edit below this line
module.exports = removeFromArray;
