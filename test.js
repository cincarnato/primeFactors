const primeFactors = require('./index.js')
const assert = require('assert')

describe('primeFactors Challenge', () => {

    /**
     * TEST DESCRIPTION
     */
    it('Test1 - prime factors for number 4', () => {

        let result = primeFactors(4)
        let expected = "2 2"

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test2 - prime factors for number 24', () => {

        let result = primeFactors(24)
        let expected = "2 2 2 3"

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test3 - prime factors for number 59', () => {
        let result = primeFactors(59)
        let expected = "59"

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test4 - prime factors for number 1234567890', () => {
        let result = primeFactors(1234567890)
        let expected = "2 3 3 5 3607 3803"

        assert.strictEqual(result,expected)
    })

     /**
     * TEST DESCRIPTION
     */
    it('Test5 - prime factors for number 987654321098765', () => {
        let result = primeFactors(1234567890)
        let expected = "5 233 1279 662839679"

        assert.strictEqual(result,expected)
    })
})
