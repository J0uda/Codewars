/**Given a list of rows of a square matrix, find the product of the main diagonal.

Examples:

mainDiagonalProduct([[1,0],[0,1]]) => 1

mainDiagonalProduct([[1,2,3],[4,5,6],[7,8,9]]) => 45 */
function mainDiagonalProduct(mat) {
  let result = 1;
  for (let i = 0; i < mat.length; i++) {
    result *= mat[i][i];
  }
  return result;
}
