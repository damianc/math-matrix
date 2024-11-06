import _operation from '@utils/_operation';

export default function sub(A,B) {
	return _operation(A,B,(a,b) => a-b);
}



