import assert from '@assert';

export default function trace(M) {
	assert.isSquareMatrix(M);
  
	const n = M.length;
	let tr = 0;
	for (let i=0; i<n; i++) tr += M[i][i];
	return tr;
}
