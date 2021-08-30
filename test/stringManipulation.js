const StringManipulation = artifacts.require('StringManipulation')

contract('StringManipulation', () => {
    let stringManipulation = null
    before(async () => {
        stringManipulation = await StringManipulation.deployed()
    })

    it('Should return the length of a string', async () => {
        const length = await stringManipulation.length('abc')
        assert(length.toNumber() === 3)
    })

    it('Should concatenate two strings', async () => {
        const concatenatedString = await stringManipulation.concatenate('abc', 'def')
        assert(concatenatedString === 'abcdef')
    })
})