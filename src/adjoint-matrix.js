import transpose from './transpose';
import { cofactorMatrix } from './cofactor-matrix';

export default function adjointMatrix(M) {
	return transpose(cofactorMatrix(M));
}
