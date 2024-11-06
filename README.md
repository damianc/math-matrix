# Math.matrix
Support for matrices in JavaScript.

## Functions

### Operations

- `add(A,B)` - performs addition of matrices $A$ and $B$
- `sub(A,B)` - performs subtraction of matrices $A$ and $B$
- `mul(A,B)` - performs multiplication of matrices $A$ and $B$
- `mulByScalar(M,k)` - performs multiplication of a matrix $M$ by a scalar value $k$
- `transpose(M)` - performs transposition of a matrix $M$

### Properties

- `det(M)` - returns the determinant of a matrix $M$
- `order(M)` - returns the order of a matrix $M$
- `trace(M)` - returns the trace of a matrix $M$
- `cofactor(M,i,j)` - returns a cofactor for element $a_{ij}$ in a matrix $M$
- `cofactorMatrix(M)` - returns the _cofactor matrix_ for a matrix $M$
- `adjointMatrix(M)` - returns the _adjoint matrix_ for a matrix $M$
- `inverseMatrix(M)` - returns the _inverse matrix_ for a matrix $M$

### Minors

- `minorMatrix(M)` - returns the _minor matrix_ for a matrix $M$
- `minor(M,i,j)` - returns a minor for element $a_{ij}$ in a matrix $M$
- `minorize(M,i,j)` - returns a matrix $M$ with _i-th_ row and _j-th_ column removed

### Creating a Matrix

- `initNullMatrix(m,n)` - creates a _null matrix_ of order $m \times n$
- `initScalarMatrix(n,k=1)` - creates a _scalar matrix_ of order $n \times n$ with a scalar value $k$ on the diagonal
- `initIdentityMatrix(n)` - creates an _identity matrix_ of order $n \times n$

### Altering a Matrix

- `removeRow(M,i)` - returns a matrix $M$ with _i-th_ row removed
- `removeColumn(M,j)` - returns a matrix $M$ with _j-th_ column removed
- `insertRow(M,i,row)` - returns a matrix $M$ with additional row inserted just before _i-th_ row
- `insertColumn(M,j,column)` - returns a matrix $M$ with additional column inserted just before _j-th_ column
- `swapRows(M,m,n)` - returns a matrix $M$ with _m-th_ and _n-th_ rows swapped
- `swapColumns(M,m,n)` - returns a matrix $M$ with _m-th_ and _n-th_ columns swapped

### Testing

- `isSquare(M)` - checks if a matrix $M$ is the _square matrix_
- `isEqual(A,B)` - checks if a matrix $A$ is equal to a matrix $B$
