import assert from '@assert';
import det from './det';
import order from './order.js';

export function minor(M,i,j) {
	return det(minorize(M,i,j));
}

export function minorize(M,i,j) {
	assert.isMinorable(M,i,j);
  
	const [rows,cols] = order(M);
	const m = [];
  
	for (let row=1; row <= rows; row++) {
		if (row === i) continue;
		const currRow = [];
    
		for (let col=1; col <= cols; col++) {
			if (col === j) continue;
			currRow.push(M[row-1][col-1]);
		}
    
		m.push(currRow);
	}
  
	return m;
}

export function minorMatrix(M) {
	assert.isSquareMatrix(M);
	return M.map((row,i) => {
		return row.map((_,j) => {
			return minor(M,i+1,j+1);
		});
	});
}
