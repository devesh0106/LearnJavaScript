var myname= 'Devesh Anand'
console.log(myname);
console.log( typeof myname);
console.log(9+"4"); //Bug in JS

var myNull=null;
console.log(myNull);
console.log(typeof myNull); //Bug in JS as Object is not a Datatype

var iAmUseless;
console.log(iAmUseless);
console.log(typeof iAmUseless); //Undefined Type

//Substracting 2 Strings, results NaN
console.log("Pooja"-"Sharma")
//NaN is a property of the global object and its initial value is Not-A-Number

if(isNaN(myname)){
    console.log("Please Enter a Valid Name");
}

console.log(NaN===NaN); //false as NaN is a Property and not a value
console.log(Number.NaN===NaN); //false
console.log(isNaN(NaN)); //true

