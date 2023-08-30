const getTheTitles = function(myArray) {
    newArray = [];
    myArray.forEach(element => {
        newArray.push(element['title']);
    });
    return newArray;
};

// Do not edit below this line
module.exports = getTheTitles;
