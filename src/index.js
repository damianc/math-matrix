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
    adjointMatrix
  };
  
})()
