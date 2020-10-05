/* page 126 생각해보기 level 2

0이상 2^n - 1 이하의 수는 각각 원소가 n개인 집합에서 부분집합을 만드는 방법
하나와 대응된다. 이를 이용해서 모든 부분집합을 출력하는 프로그램을 비재귀적으로
작성하라.

*/

const log = console.log
const line = '-'.repeat(80)

function subset(n){

	let set = [[]]

	for(let i = 0; i < n; i++){
		set = dup(set, i)
	}

	return set

}


function dup(set, idx){

	const rst = []

	for(let i = 0, end = set.length; i < end; i++){
		rst.push([...set[i], idx])		
		rst.push(set[i])
	}

	return rst
}


//log(subset(3))
// log(...dup([[0]], 1))
// log('---------------')	
// log(...dup([[0], [1], [0,1]], 1))
log(...subset(1))
log(line)
log(...subset(2))
log(line)
log(...subset(3))
log(line)
log(...subset(4))
log(line)