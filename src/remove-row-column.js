import _clamp from '@utils/_clamp';
import _clone from '@utils/_clone';
import order from './order';

export function removeRow(M,m=M.length) {
	const [rows] = order(M);
	m = _clamp(m,1,rows);
	return _clone(
		M,
		(_,i) => i !== (m-1)
	);
}

export function removeColumn(M,n=M[0].length) {
	const [,cols] = order(M);
	n = _clamp(n,1,cols);
	return _clone(
		M,
		() => true,
		(_,j) => j !== (n-1)
	);
}
