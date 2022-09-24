const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Kamu Siapa? : ', name => {
  console.log(`Hey there ${name}!`);
  readline.close();
})