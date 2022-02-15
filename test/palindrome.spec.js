const isPalindrome = require('../palindromeChecker')

describe('palindrome tests', function () {

    it('when empty, return true', function () {
        //input
        const input = ''
        //expected result
        const expected = true
        //actual result
        const actual = isPalindrome(input);
        //assert
        expect(actual).toBe(expected)
    })
    it('when wow, returns true', function () {
        const input = 'wow'
        const expected = true
        const actual = isPalindrome(input)
        expect(actual).toBe(expected)
    })
    it('when racecar, returns true', function () {
        const input = 'racecar'
        const expected = true
        const actual = isPalindrome(input)
        expect(actual).toBe(expected)
    })
    it('when hello, returns false', function () {
        const input = 'hello'
        const expected = false
        const actual = isPalindrome(input)
        expect(actual).toBe(expected)
    })
})
