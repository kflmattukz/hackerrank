function gradingStudents(grades) {
  // Write your code here
  let i = 0;
  let round;
  let finalGrade = [];
  while(i < grades.length) {
    round = Math.ceil(grades[i] /5 ) * 5;
    if (round - grades[i] < 3 && round >= 40) {
      finalGrade.push(round)
    } else if (grades[i] < 40 || round - grades[i] >=3) {
      finalGrade.push(grades[i]);
    }
    i++;
  }
  return finalGrade;
}

// function gradingStudents(grades) {
//   let round;
//   let result = [];
//   for (let i = 0; i < grades.length; i++) {
//     round = Math.ceil(grades[i] / 5) * 5;
//     if (round - grades[i] < 3 && round >= 40) {
//     result.push(round);
//     } else if (grades[i] < 40 || round - grades[i] >= 3) {
//     result.push(grades[i]);
//     }
//   }
//   return result;
// }

console.log(gradingStudents([73,67,38,33]));
// console.log([73,67,38,33]);