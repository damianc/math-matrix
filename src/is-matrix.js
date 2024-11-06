import order from './order';

export function isSquare(M) {
  const [rows,cols] = order(M);
  return rows === cols;
}

function equal(A,B) {
	const [rowsA,colsA] = order(A);
	const [rowsB,colsB] = order(B);
	if (
		(rowsA!==rowsB) || (colsA!==colsB)
	) {
		return false;
	}
	return A.every((row,i) => {
		if (row.length !== B[i].length) {
			return false;
		}
		return row.every((col,j) => {
			return col === B[i][j];
		});
	});
}
