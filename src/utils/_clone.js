export default function _clone(M, rt, ct = () => true) {
	const C = M.filter(rt).map((row,i) => {
		return row.filter(ct);
	});
	return C;
}
