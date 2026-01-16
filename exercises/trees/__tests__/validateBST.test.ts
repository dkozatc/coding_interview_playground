import { isValidBST } from "../validateBST"

describe('validateBST', () => {
    it('check valid tree if its truthy valid', () => {
        const validTree = {
            value: 2,
            left: {
                value: 1,
                left: null,
                right: null
            },
            right:{
                value: 3,
                left: null,
                right: null
            },
        }
        expect(isValidBST(validTree)).toBeTruthy()
    })

     it('check invalid tree if is it invalid', () => {
        const validTree = {
            value: 2,
            left: {
                value: 4,
                left: null,
                right: null
            },
            right:{
                value: 3,
                left: null,
                right: null
            },
        }
        expect(isValidBST(validTree)).toBeFalsy()
    })
})