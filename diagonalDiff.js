function diagonalDifference(arr) {
  // Write your code here
  let digLeft = 0;
  let digRight = 0;
  let count = 0;
  while(count < arr.length) {
      digLeft += arr[count][count];
      digRight += arr[count][arr.length - ( count +1)];
      count++
  }
  return digLeft > digRight ? (digLeft - digRight) : (digRight - digLeft);
}

let matrix = [
  [11,2,4],
  [4,5,6],
  [10,8 ,-12]
]
console.log(matrix);
console.log(diagonalDifference(matrix));

// console.log(matrix[0][0]);