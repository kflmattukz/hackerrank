function birthdayCakeCandles(candles) {
  // Write your code here
  let maxNumber = 0;
  let countCanles = 0;
  let count = 0;
  while (count < candles.length) {
    
    if(maxNumber < candles[count]) {
      maxNumber = candles[count];
      countCanles = 0;
    }
    
    if (maxNumber == candles[count]) countCanles += 1
    
    count++;
  }
  return countCanles;
}

console.log(birthdayCakeCandles([3,2,1,3]))