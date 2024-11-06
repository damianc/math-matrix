import order from '../order';

export default function multiplicableMatrices(A,B) {
  const [,colsA] = order(A);
  const [rowsB] = order(B);
  
  if (colsA !== rowsB) {
    throw new Error(
      'matrices cannot be multiplied'
    );
  }
}

