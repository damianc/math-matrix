import order from '../order';

export default function isMinorable(M,i,j) {
  const [rows,cols] = order(M);
  
  if (
    i < 1 || j < 1 ||
    i > rows || j > cols
  ) {
    throw new Error(
      `invalid index [${i}][${j}]`
    );
  }
}
