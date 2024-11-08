import add from './add';
import sub from './sub';
import mul from './mul';
import mulByScalar from './mul-by-scalar';
import order from './order';
import trace from './trace';
import det from './det';
import transpose from './transpose';
import {
  minor, minorize, minorMatrix
} from './minor';
import {
  initNullMatrix, initScalarMatrix, initIdentityMatrix
} from './init-matrix';
import { cofactorMatrix, cofactor } from './cofactor-matrix';
import adjointMatrix from './adjoint-matrix';
import { removeRow, removeColumn } from './remove-row-column';
import { insertRow, insertColumn } from './insert-row-column';
import { swapRows, swapColumns } from './swap-rows-columns';
import { isSquare, isEqual } from './is-matrix';
import { getRow, getColumn } from './get-row-column';

(function () {
  
  Math.matrix = {
    add,
    sub,
    mul,
    mulByScalar,
    order,
    trace,
    det,
    transpose,
    minor,
    minorize,
    minorMatrix,
    initNullMatrix,
    initScalarMatrix,
    initIdentityMatrix,
    cofactorMatrix,
    cofactor,
    adjointMatrix,
    removeRow,
    removeColumn,
    insertRow,
    insertColumn,
    swapRows,
    swapColumns,
    isSquare,
    isEqual,
    getRow,
    getColumn
  };
  
})()
