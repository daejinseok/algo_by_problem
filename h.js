const log = console.log
const assert = require('assert')

const equalArray = (a, b) => a.every( (val, idx) => val === b[idx] )
const equal = (a, b) => JSON.stringify(a) === JSON.stringify(b)
const deepSort = a => {

    if( !Array.isArray(a) ){
        return a;
    }

    const a2 = a.map( x => deepSort(x) )
    return a2.sort();
}



const equalSet = (a, b) => {

    let a2, b2

    if (a.length !== undefined){
        a2 = deepSort(a);
        b2 = deepSort(b);
    } else {
        a2 = a;
        b2 = b;
    }

    const e = equal(a2, b2)

    if ( !e ){
        log('=== DIFF ===')
        log(a2)
        log(b2)
    }

    return e
}

const notEqualSet = (a, b) => {

    let a2, b2

    if (a.length !== undefined){
        a2 = deepSort(a);
        b2 = deepSort(b);
    } else {
        a2 = a;
        b2 = b;
    }

    const e = equal(a2, b2)

    if ( e ){
        log('=== EQUAL ===')
        log(a2)
    }

    return !e
}

const notEqual = (a, b) => !equal(a, b)
const assertEqual = (a, b) => assert(equal(a, b))
const assertEqualSet = (a, b) => assert(equalSet(a, b))
const assertNotEqual = (a, b) => assert(notEqual(a, b))
const assertNotEqualSet = (a, b) => assert(notEqualSet(a, b))

exports.log = log
//exports.assert = assert
exports.equalArray = equalArray
exports.equal = equal
exports.deepSort = deepSort
exports.equalSet = equalSet
exports.notEqual = notEqual
exports.notEqualSet = notEqualSet
exports.assert = assertEqual
exports.assertSet = assertEqualSet
exports.assertNot = assertNotEqual
exports.assertSetNot = assertNotEqualSet

