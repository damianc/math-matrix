export default function transpose(M) {
	const T = [];
	for (let i=0; i<M[0].length; i++) {
		let R = [];
		for (let j=0; j<M.length; j++) {
			R.push(M[j][i]);
		}
		T.push(R);
	}
	return T;
}

