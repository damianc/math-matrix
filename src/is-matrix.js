import order from './order';

export function isSquare(M) {
  const [rows,cols] = order(M);
  return rows === cols;
}
