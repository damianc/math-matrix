# Math.matrix
Support for matrices in JavaScript.

## Functions

- `add(A,B)` - performs addition of matrices $A$ and $B$
- `sub(A,B)` - performs subtraction of matrices $A$ and $B$
- `mul(A,B)` - performs multiplication of matrices $A$ and $B$
- `mulByScalar(M,k)` - performs multiplication of a matrix $M$ by a scalar value $k$
- `transpose(M)` - performs transposition of a matrix $M$
- `det(M)` - returns the determinant of a matrix $M$
- `cofactor(M,i,j)` - returns a cofactor for element $a_{ij}$ in a matrix $M$
- `cofactorMatrix(M)` - returns the _cofactor matrix_ for a matrix $M$
- `adjointMatrix(M)` - returns the _adjoint matrix_ for a matrix $M$
- `inverseMatrix(M)` - returns the _inverse matrix_ for a matrix $M$
- `minor(M,i,j)` - returns a minor for element $a_{ij}$ in a matrix $M$
- `minorize(M,i,j)` - returns a matrix $M$ with _i-th_ row and _j-th_ column removed
- `order(M)` - returns the order of a matrix $M$
- `trace(M)` - returns the trace of a matrix $M$
- `initNullMatrix(m,n)` - creates a _null matrix_ of order $m \times n$
- `initScalarMatrix(n,k=1)` - creates a _scalar matrix_ of order $n \times n$ with a scalar value $k$ on the diagonal
- `initIdentityMatrix(n)` - creates an _identity matrix_ of order $n \times n$
