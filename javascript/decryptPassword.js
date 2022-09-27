function decryptPassword(s) {
  // Write your code here
  let result = []
  let i = 0;
  while(i < s.length - 1) {
      if(s[i] == s[i].toLowerCase() && s[i + 1] == s[i + 1].toUpperCase()){
          result.push(s[i + 1])
          result.push(s[i])
          result.push('*')
          i += 2;
          continue;
      } else if (typeof(s[i]) == 'number') {
          result.push('0')
          result.unshift(s[i])
          i +=1
          continue;
      }
  i++;
  }
  return result.join('')
}

console.log(decryptPassword('51Pa*0Lp*0e') , 'expected output = aP1pL5e');