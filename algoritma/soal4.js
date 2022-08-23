// Soal 4

const matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];

function diagSubstraction(matrix) {
  let sum = 0;
  for (let i = 0, l = matrix.length; i < l; i++){
    sum += matrix[i][l - i - 1] - matrix[i][i];
  };
  
  return Math.abs(sum);
}

console.log(diagSubstraction(matrix));