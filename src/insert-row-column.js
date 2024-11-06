import _clamp from '@utils/_clamp';
import _insert from '@utils/_insert';
import order from './order';

export function insertRow(M,m,row) {
  const [rows] = order(M);
	m = _clamp(m,1,rows+1);
	return _insert(
		M, m, row
	);
}

export function insertColumn(M,n,column) {
  const [,cols] = order(M);
	n = _clamp(n,1,cols+1);
	return M.map((col,j) => {
		return _insert(col, n, column[j]);
	});
}
