import order from '../order';

export default function isSquareMatrix(M) {
  const [rows,cols] = order(M);
  const is = rows === cols;
  
  if (!is) throw new Error(
    'a square matrix must be passed'
  );
}
