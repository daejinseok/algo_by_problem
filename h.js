const log = console.log
const assert = require('assert')






//equalsSet

exports.log = console.log
exports.assert = require('assert')

exports.equalArray = (a, b) => a.every( (val, idx) => val === b[idx] )
exports.equalSet = (a, b) => {

    const a_sort = a.sort()
    const b_sort = b.sort()

    return exports.equalArray(a_sort, b_sort)

}


const a = [[3,2,2], [3,2,1], [3,2,1], [3,1,1], [1,2], [2,3]]




exports.log = log
exports.assert = assert