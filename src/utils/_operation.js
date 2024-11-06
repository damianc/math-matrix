import { assert } from '@assert';

function _operation(A,B,f) {
	assert.compatibleMatrices(A,B);
	return A.map((row,i) => {
		return row.map((item,j) => {
			return f(item, B[i][j]);
		});
	});
}

