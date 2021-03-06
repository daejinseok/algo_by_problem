
const h = require('./h.js')

h.assert(['1', '2', '3'], ['1', '2', '3'])
h.assertNot(['1', '2', '3'], ['1', '2'])
h.assertNot(['1', '2', '3'], ['1', '3', '2'])

// h.log( h.deepSort('1') )
// h.log( h.deepSort(['3','2','1']) )
// h.log( h.deepSort([[3,2,2], [3,2,1], [3,2,1], [3,1,1], [1,2], [2,3]]) )

h.assertSet(['1', '2', '3'], ['1', '2', '3'])
h.assertSetNot(['1', '2', '3'], ['1', '2'])
h.assertSet(['1', '2', '3'], ['1', '3', '2'])

h.assertSet( 
     [[3,2,2], [3,2,1], [3,2,1], [3,1,1], [1,2], [2,3]],
     [[1,2], [2,3], [2,3,2], [3,2,1], [3,2,1], [3,1,1]] )

h.assertSetNot( 
     [[3,2,2], [3,2,1], [3,2,1], [3,1,1], [1,2], [2,3]],
     [[1,1], [2,3], [3,2,2], [3,2,1], [3,2,1], [3,1,1]] )


