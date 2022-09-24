function staircase(n) {
  // Write your code here
  let filledArray  = new Array(n).fill(' ');
  for (let i = 0; i < n; i++) {
      filledArray.shift();
      filledArray.push('#');
      console.log(filledArray.join(''));
  }
  // console.log(stair);
}

// function staircase(n) {
//   let filledArray = new Array(n).fill(' ');
//   //console.log(filledArray);
//   while (filledArray.indexOf(' ') !== -1) {
//       filledArray.shift();
//       filledArray.push('#');
//       console.log(filledArray.join(""));
//       n--;
//   }
// }

staircase(7)