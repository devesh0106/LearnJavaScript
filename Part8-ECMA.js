//Data Time
// There are 4 ways to create a new  Data Object:
// 1. new Date()
// 2. new Date(year, month, day, hours, minutes, seconds, milliseconds)      //It takes 7 arguments
// 3. new Date(milliseconds)                                                 
// 4. new Date(date String)

console.log(new Date().toLocaleString())
console.log(new Date().toString())

//Date.now() :Returns numeric value to the current time from 1 Jan,1970 in ms

let milliSecond = console.log(Date.now())
console.log(new Date(1632985042118).toString())

//To get Individual
const curDate = new Date();

console.log(`Full Date with Time ${curDate.toLocaleString()}`)
console.log(`Full Year ${curDate.getFullYear()}`)
console.log(`Only Month ${curDate.getMonth()}`)
console.log(`Only Date ${curDate.getDate()}`)
console.log(`Only Date ${curDate.getDay()}`)