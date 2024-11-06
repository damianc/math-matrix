import _clamp from '@utils/_clamp';
import _clone from '@utils/_clone';

export function removeRow(M,m=M.length) {
	m = _clamp(m,1,M.length);
	return _clone(
		M,
		(_,i) => i !== (m-1)
	);
}

export function removeColumn(M,n=M[0].length) {
	n = _clamp(n,1,M[0].length);
	return _clone(
		M,
		() => true,
		(_,j) => j !== (n-1)
	);
}
