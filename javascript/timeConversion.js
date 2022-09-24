const { Console } = require("console");

function timeConversion(s) {
  // Write your code here
  let [hour,minute,second] = s.split(':');
  let pmoram = second.slice(2);
  hour = parseInt(hour);
  if ((hour == 12 && pmoram == 'AM') || (hour != 12 && pmoram == 'PM')) {
    hour = hour + 12 >= 24 ? '00' : hour + 12;
    return [hour,minute,second.slice(0,2)].join(':');
  }
  hour = hour < 10 ? '0' + hour : hour;
  return [hour,minute,second.slice(0,2)].join(':');
  // console.log(hour,minute,second,pmoram);
}
console.log(timeConversion('06:40:03AM'));
console.log(timeConversion('07:05:45PM'));
console.log(timeConversion('12:45:54AM'));
console.log(timeConversion('12:45:54PM'));

