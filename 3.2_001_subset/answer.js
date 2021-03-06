const h = require('../h.js')

// function _subset(set, size, n, idx, output){
// 	if( n === idx){
// 		output.push(set.slice(0, size))
// 		return
// 	}

// 	set[size] = idx
// 	_subset(set, size+1, n, idx+1, output)
// 	_subset(set, size, n, idx+1, output)
// }


function subset(n){

	function _subset(set, n, idx, output){
		if( n === idx){
			output.push(set)
			return
		}
	
		_subset(set,           n, idx+1, output)
		_subset([...set, idx], n, idx+1, output)
	}	

	const output = []

	_subset([], n, 0, output)

	return output
}


h.assertSet( subset(1), [[],[0]] )
h.assertSet( subset(2), [[],[0],[1],[0,1]] )
h.assertSet( subset(3), [[],[0],[1],[0,1]
,[2],[0,2],[1,2],[0,1,2]] )

h.assertSet( subset(4), [
[],[0],[1],[0,1],
[2],[0,2],[1,2],[0,1,2],
[3],[3,0],[3,1],[3,0,1],
[3,2],[3,0,2],[3,1,2],[3,0,1,2]]) 

h.assertSet(subset(5), [
	[ 0, 1, 2, 3, 4 ],
	[ 0, 1, 2, 3 ],
	[ 0, 1, 2, 4 ],
	[ 0, 1, 2 ],
	[ 0, 1, 3, 4 ],
	[ 0, 1, 3 ],
	[ 0, 1, 4 ],
	[ 0, 1 ],
	[ 0, 2, 3, 4 ],
	[ 0, 2, 3 ],
	[ 0, 2, 4 ],
	[ 0, 2 ],
	[ 0, 3, 4 ],
	[ 0, 3 ],
	[ 0, 4 ],
	[ 0 ],
	[ 1, 2, 3, 4 ],
	[ 1, 2, 3 ],
	[ 1, 2, 4 ],
	[ 1, 2 ],
	[ 1, 3, 4 ],
	[ 1, 3 ],
	[ 1, 4 ],
	[ 1 ],
	[ 4, 3, 2 ],
	[ 2, 3 ],
	[ 2, 4 ],
	[ 2 ],
	[ 3, 4 ],
	[ 3 ],
	[ 4 ],
	[]] )