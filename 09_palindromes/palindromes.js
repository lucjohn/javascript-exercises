const palindromes = function (string) {
    let formatted = string
    .toLowerCase()
    .split('')
    .filter((ch) => {return 'qwertyuiopasdfghjklzxcvbnm1234567890'.split('').includes(ch);})
    .join('');
    return formatted == formatted.split('').reverse().join('');

};

// Do not edit below this line
module.exports = palindromes;
