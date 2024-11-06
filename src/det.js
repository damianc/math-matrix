import assert from '@assert';
import transpose from './transpose';
import minor from './minor';

export default function det(M,R=1,pickRow=true) {
	assert.isSquareMatrix(M);
  
	if (M.length === 1) return M[0][0];
	if (M.length === 2) {
		const [[a,b],[c,d]] = M;
		return a*d-b*c;
	}
  
	// Sarrus' rule
	if (M.length === 3) {
		const [
		 [a,b,c],
		 [d,e,f],
		 [g,h,i]
		] = M;
		const s1 = a*e*i+b*f*g+c*d*h;
		const s2 = a*f*h+b*d*i+c*e*g;
		return s1-s2;
	}
  
	// Laplace expansion
	if (!pickRow) M = transpose(M);
	const r = M[R-1].map((v,j) => {
		const col = j+1;
		const p = (-1)**(R+col);
		const m = minor(M,R,col);
		return p * v * m;
	});
  
	return r.reduce((acc,curr) => acc + curr, 0);
}
