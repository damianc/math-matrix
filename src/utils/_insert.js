export default function _insert(arr,i,term) {
	const C = [...arr];
	C.splice(i-1,0,term);
	return C;
}
