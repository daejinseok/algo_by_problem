const h = require('../h.js')

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

function answer(vs, ws, limit)
{
    const SIZE = vs.length
    const arr = subset(SIZE)

    function calc(a){

        if ( a.reduce( (ac, cv) => {
            return ac + ws[cv]
        }, 0) > limit ) return 0

        return a.reduce( (ac, cv) => {
            return ac + vs[cv]
        }, 0)
    }

    let maxValue = 0
    let maxIdx = -1
    const END = arr.length;
    for(let i = 0; i < END; i++){

        const val = calc(arr[i])

        if ( maxValue < val ){
            maxValue = val
            maxIdx = i         
        }
    }

    h.log(maxValue)
    h.log(arr[maxIdx])
    return arr[maxIdx]
}

// 물건의 갯수
const N = 10;

// 가방에 넣을 수 있는 최대 무게
const W = 20;

// 물건들의 가치
const Values  = [2, 3, 3, 4, 4, 5, 7, 8, 8, 9]

// 물건들의 무게
const Weights = [3, 5, 7, 4, 3, 9, 2, 9, 5, 10]


// 최대 가치
// Max value : 28

// 4, 6, 8, 9를 담으면


h.assertSet( answer(Values, Weights, W), [4, 6, 8, 9] )