//equalsSet






exports.log = console.log
exports.equalsArray = (a, b) => a.every( (val, idx) => val === b[idx] )