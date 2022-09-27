function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let count = 0
  let cApples = 0
  let cOranges = 0;
  while(count < apples.length) {
      if(apples[count] + a >= s && apples[count] + a <= t) {
          cApples += 1
      }
      count++
  }
  count = 0
  while(count < oranges.length) {
      if(oranges[count] + b >= s && oranges[count] + b <= t) {
          cOranges += 1
      }
      count++
  }
  console.log(cApples + '\n' + cOranges)
}


console.log(countApplesAndOranges(7,10,3,5,[3,-2,5],[5,7,-3]));