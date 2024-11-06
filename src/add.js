import _operation from '@utils/_operation';

export default function add(A,B) {
	return _operation(A,B,(a,b) => a+b);
}

