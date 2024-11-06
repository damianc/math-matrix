import order from '../order';

export default function compatibleMatrices(A,B) {
 	const [rowsA,colsA] = order(A);
 	const [rowsB,colsB] = order(B);
 	if (
 		(rowsA !== rowsB) || (colsA !== colsB)
 	) {
 	 throw new Error(
 	 	'incompatible matrices'
 	 );
 	}
 }

