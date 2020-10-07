const log = console.log
const assert = require('assert')

const equalArray = (a, b) => a.every( (val, idx) => val === b[idx] )
const equal = (a, b) => JSON.stringify(a) === JSON.stringify(b)
const equalSet = (a, b) => {

    let a2, b2

    if (a.length !== undefined){
        a2 = a.sort();
        b2 = b.sort();
    } else {
        a2 = a;
        b2 = b;
    }    

    return equal(a2, b2)
}

const notEqual = (a, b) => !equal(a, b)
const notEqualSet = (a, b) => !equalSet(a, b)

const assertEqual = (a, b) => assert(equal(a, b))
const assertEqualSet = (a, b) => assert(equalSet(a, b))
const assertNotEqual = (a, b) => assert(notEqual(a, b))
const assertNotEqualSet = (a, b) => assert(notEqualSet(a, b))

exports.log = log
//exports.assert = assert
exports.equalArray = equalArray
exports.equal = equal
exports.equalSet = equalSet
exports.notEqual = notEqual
exports.notEqualSet = notEqualSet
exports.assert = assertEqual
exports.assertSet = assertEqualSet
exports.assertNot = assertNotEqual
exports.assertSetNot = assertNotEqualSet

