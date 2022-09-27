function kangaroo(x1, v1, x2, v2) {
  // Write your code here
//     if v2 > v1 ||  v1-v2 == 0 {
  //     return "NO"
  // }
  // if (x2 - x1) % (v1-v2) == 0 {
  //     return "YES"
  // }

  // return "NO"
  if(v2 > v1 || v1-v2 == 0) {
      return "NO"
  }
  if((x2 - x1) % (v1-v2) == 0) {
      return "YES"
  }
  return "NO"
}