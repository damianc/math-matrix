import { minor } from './minor';

export function cofactorMatrix(M) {
	return M.map((row,i) => {
		return row.map((_,j) => {
			return cofactor(M,i+1,j+1);
		});
	});
}

export function cofactor(M,i,j) {
	const m = minor(M,i,j);
	return (-1)**(i+j) * m;
}
