
const h = require('./h.js')

h.assert(h.equalArray(['1', '2', '3'], ['1', '2', '3']))
h.assert(!h.equalArray(['1', '2', '3'], ['1', '2']))

h.assert.deepStrictEqual(['1', '2', '3'], ['1', '2', '3'])
h.assert.notDeepStrictEqual(['1', '2', '3'], ['1', '2'])
h.assert.notDeepStrictEqual(['1', '2', '3'], ['1', '3', '2'])


// h.assert(h.equalSet(['1', '2', '3'], ['1', '2', '3']))
// h.assert(h.equalSet(['1', '2', '3'], ['1', '3', '2']))
// h.assert(h.equalSet(['1', '2', '3'], ['1', '3']))