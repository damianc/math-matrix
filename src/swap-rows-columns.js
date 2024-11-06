import _swap from '@utils/_swap';

export function swapRows(M,m,n) {
	return _swap(M,m,n);
}

export function swapColumns(M,m,n) {
	return M.map(row => _swap(row,m,n));
}
