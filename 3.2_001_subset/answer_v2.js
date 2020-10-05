const h = require('../h.js')

function subset(n){

	const _subset = (set, N, idx) => {
		if( N === idx){
			h.log(set)
			return
		}

		_subset(set.slice(), N, idx+1)
		set.push(idx)
		_subset(set.slice(), N, idx+1)		
	}

	_subset([], n, 0)
}


subset(5)