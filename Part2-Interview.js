var x=5
var y=5
console.log("Are x and y equal"+ x==y) //false due to + operator ,ECMA 
console.log("Are x and y equal", x==y); //true
console.log(x==y); //true
console.log('Are x and y equal : ${x==y}');

console.log(x!=y)

//** ctrl+i for emoji on vscode 🤠 ✔️
console.log(3**3) //Exponentiation Operator (3 to the power 3) results 27
console.log(30**-1)  //0.03333333333333333  

//WAP to find Leap Year 
var year=2020
debugger;
if(((year%4)===0) && ((year%100)===0) && ((year%400)===0)){
    console.log(year, "is a Leap Year")
}else
console.log(year, "is not a Leap Year,Try another Year")