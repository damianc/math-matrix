export default function mulByScalar(M,k) {
  return M.map(row => row.map(c => c*k));
}

