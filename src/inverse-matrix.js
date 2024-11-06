import det from './det';
import mulByScalar from './mul-by-scalar';
import adjointMatrix from './adjoint-matrix';

export default function inverseMatrix(M) {
	const d = det(M);
	return mulByScalar(adjointMatrix(M),1/d);
}
