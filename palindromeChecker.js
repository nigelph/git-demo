function isPalindrome(input) {
    return input === input.split('').reverse().join('');
}

module.exports = isPalindrome;