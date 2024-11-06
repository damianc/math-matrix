export function initNullMatrix(m,n) {
  const M = [];
  for (let i=1; i<=m; i++) {
    M.push((new Array(n)).fill(0));
  }
  return M;
}

export function initScalarMatrix(n,k=1) {
	const nm = initNullMatrix(n,n);
	for (let i=0; i<n; i++) {
		nm[i][i] = k;
	}
	return nm;
}

export function initIdentityMatrix(n) {
	return initScalarMatrix(n,1);
}

