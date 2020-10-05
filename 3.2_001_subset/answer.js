const log = console.log


function _subset(set, size, n, idx){
	if( n === idx){
		log(set.slice(0, size))
		return
	}

	set[size] = idx
	_subset(set, size+1, n, idx+1)
	_subset(set, size, n, idx+1)
}


function subset(n){

	const set = []
	let size = 0
	const N = n

	_subset(set, size, N, 0)
}


subset(5)