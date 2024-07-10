const fibonacci = function(num) {
    num = parseInt(num);
    if (num == 0 )return 0;
    if (num < 0) return 'OOPS';
    let array = [1, 1];
    if (num == 1|| num == 2) {return 1;}
    while (array.length < num){
        array.push(array[array.length - 1] + array[array.length - 2]);
    }
    return array[array.length -1];

};

// Do not edit below this line
module.exports = fibonacci;
