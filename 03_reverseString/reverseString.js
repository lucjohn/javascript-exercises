const reverseString = function(string) {
    const stringArray = string.split('');
    returnString = '';
    for(i = string.length - 1; i >= 0; i--) {
        returnString += stringArray[i];
    }
    return returnString;

};

// Do not edit below this line
module.exports = reverseString;
