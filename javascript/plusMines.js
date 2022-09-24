function plusMinus(arr) {
  // Write your code here
  const arrPlusMinus = [0,0,0]; //
  let count = 0;
  while(count < arr.length) {
      if (arr[count] === 0) arrPlusMinus[2] +=1; // check if Zero and increment 
      if (arr[count] > 0) arrPlusMinus[0] += 1; // Check if Positive and increment
      if (arr[count] < 0) arrPlusMinus[1] += 1; // increment negative 
      count++
  }

  // console.log(arrPlusMinus[0],arrPlusMinus[1],arrPlusMinus[2])
  console.log((arrPlusMinus[0] / arr.length).toFixed(6))
  console.log((arrPlusMinus[1] / arr.length).toFixed(6))
  console.log((arrPlusMinus[2] / arr.length).toFixed(6))    
}


plusMinus([-4,3,-9,0,4,1])