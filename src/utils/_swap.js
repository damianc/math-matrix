export default function _swap(arr,m,n) {
	arr = [...arr];
  
	const h = Math.min(m,n);
	const t = Math.max(m,n);
	const [second] = arr.splice(t-1,1);
	const [first] = arr.splice(h-1,1,second);
  
	arr.splice(t-1,0,first);
	return arr;
}
