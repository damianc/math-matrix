import order from './order';

export function getRow(M, i) {
  const [rows] = order(M);
	if (i >= 1 && i <= rows) {
	 return M[i-1];
	}
	return null;
}

export function getColumn(M, j) {
  const [,cols] = order(M);
	if (j >= 1 && j <= cols) {
	 return M.map(col => col[j-1]);
	}
	return null;
}
