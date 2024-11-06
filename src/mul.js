import assert from '@assert';
import order from './order';
import { initNullMatrix } from './init-matrix';

export default function mul(A,B) {
  assert.multiplicableMatrices(A,B);
	
  const [rowsA,colsA] = order(A);
  const [,colsB] = order(B);
  const C = initNullMatrix(rowsA,colsB);
 
  for (let i=0; i<rowsA; i++) {
    for (let j=0; j<colsB; j++) {
      let sum = 0;
      for (let k=0; k<colsA; k++) {
        sum += A[i][k] * B[k][j];
      }
      C[i][j] = sum;
    }
  }
  
  return C;
}

